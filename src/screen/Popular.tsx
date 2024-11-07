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
  MovieImgDiv,
  MovieTitle,
  MovieContent,
  MovieX,
} from "../styles/ScreenStyled";
import { ETitle, IMovie, IPopular } from "../types/interface";
import { AnimatePresence, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVars = {
  init: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardBoxVars = {
  init: {
    scale: 0,
  },
  doing: {
    scale: 1,
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
  const [characterId, setCharacterId] = useState(0);
  const { scrollY } = useScroll();

  // api - popular movie list
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  // api - 영화 상세내용
  const { data: movieData } = useQuery<IMovie>({
    queryKey: ["popular", "id"],
    queryFn: () => getMovie(characterId),
  });

  // function
  const onCardBoxClicked = (id: number) => {
    nagivate(`movie/${id}`); // cardBox를 누르면 url를 설정한다.
    setCharacterId(id); // characterId 저장
  };

  // overlay 영역 클릭시, 메인 url로 돌아가고 characterId값을 초기화한다.
  const onOverlayClicked = () => {
    nagivate("/");
    setCharacterId(0); // characterId 초기화
  };

  // const movieId = movieMatch?.params.movieId; // url에 기재된 movieId
  const movieInfo = // 클릭한 movie 정보
    characterId && data?.find((movie) => movie.id === characterId);

  return (
    <>
      {isLoading ? (
        <Container>
          <GridContainer>Loading...</GridContainer>
        </Container>
      ) : (
        // Movie List Area
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
                  // cardBox를 하나씩 보여주도록 설정
                  transition={{
                    type: "tween",
                    // delay: i * 0.3,
                  }}
                  layoutId={String(`${ETitle.POPULAR}${character.id}`)}
                  onClick={() => onCardBoxClicked(character.id)}
                >
                  <Img src={makeImagePath(character.poster_path)} />
                </CardBox>
              ))}
            </AnimatePresence>
          </GridContainer>

          {/* Movie Modal Area */}
          <AnimatePresence>
            {characterId ? (
              <>
                <DarkOverlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <Movie
                  layoutId={`${ETitle.POPULAR}${String(characterId)}`}
                  style={{ top: scrollY.get() + 50 }}
                >
                  {movieInfo && (
                    <>
                      {/* <MovieX /> */}
                      <MovieX
                        onClick={onOverlayClicked}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        ></path>
                      </MovieX>
                      <MovieImgDiv
                        $bgImg={makeImagePath(movieInfo.backdrop_path)}
                      />
                      <MovieTitle>{movieInfo.title}</MovieTitle>
                      <MovieContent>{movieInfo.overview}</MovieContent>
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
