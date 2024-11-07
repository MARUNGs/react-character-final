import { useQuery } from "@tanstack/react-query";
import { getMovie, getPopular, makeImagePath } from "../api/data";
import { useState } from "react";
import {
  Container,
  GridContainer,
  CardBox,
  Img,
  DarkOverlay,
  Movie,
  MovieImg,
} from "../styles/CardContainerStyled";
import { ETitle, IPopular } from "../types/interface";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";

const containerVars = {
  init: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // 자식 요소가 0.2초 간격으로 나타남
    },
  },
};

const cardBoxVars = {
  init: {
    scale: 0,
  },
  doing: {
    scale: 1,
    transition: {},
  },
  hover: {
    y: -50,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

function Popular() {
  const nagivate = useNavigate();
  const movieMatch = useMatch("/movie/:movieId");
  const [characterId, setCharacterId] = useState(0);
  const { scrollY } = useScroll();

  // api
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  const { isLoading: movieLoading, data: movieData } = useQuery<IPopular>({
    queryKey: ["popular", "id"],
    queryFn: () => getMovie(characterId),
  });

  console.log("무비데이터 확인?");
  console.log(movieData);

  // function
  // 1. cardBox를 누르면 url를 설정한다.
  // 2. 상태값에 characterId 값을 설정한다.
  const onCardBoxClicked = (id: number) => {
    nagivate(`movie/${id}`);
    setCharacterId(id);
  };

  // 클릭한 movie 정보
  const movieId = movieMatch?.params.movieId;
  const clickedMovie =
    movieId && data?.find((movie) => movie.id === Number(movieId));

  return (
    <>
      {isLoading ? (
        <Container>
          <GridContainer>Loading...</GridContainer>
        </Container>
      ) : (
        <Container>
          <GridContainer
            variants={containerVars}
            initial="init"
            animate="animate"
          >
            <AnimatePresence>
              {data?.map((character, i) => (
                <CardBox
                  key={i}
                  variants={cardBoxVars}
                  initial="init"
                  animate="doing"
                  whileHover="hover"
                  layoutId={String(`${ETitle.POPULAR}${character.id}`)}
                  onClick={() => onCardBoxClicked(character.id)}
                >
                  <Img src={makeImagePath(character.poster_path)} />
                </CardBox>
              ))}
            </AnimatePresence>
          </GridContainer>

          <AnimatePresence>
            {/* 1. CardBox를 클릭할 때, url이 변경된다. */}
            {/* 2. url이 변경되면 url 정보를 movieMatch 변수에서 확인할 수 있다. */}
            {movieMatch ? (
              <>
                <DarkOverlay></DarkOverlay>
                {/* characterId를 가져오는 건 movieMatch값으로 활용할 것. */}
                <Movie style={{ top: scrollY.get() + 50 }}>
                  {clickedMovie && (
                    <>
                      <MovieImg
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparant), url(${makeImagePath(
                            String(clickedMovie.backdrop_path)
                          )})`,
                        }}
                      />
                    </>
                  )}
                </Movie>
              </>
            ) : null}
          </AnimatePresence>
        </Container>
      )}
    </>
  );
}

export default Popular;
