import { useQuery } from "@tanstack/react-query";
import { getPopular, makeImagePath } from "../api/data";
import {
  Container,
  Grid,
  Card,
  Img,
  DarkOverlay,
  ModalContainer,
} from "../styles/ScreenStyled";
import { ETitle, IPopular } from "../types/interface";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { containerVars, cardVars } from "../types/variants";
import Modal from "../components/Modal";
import { useState } from "react";

function Popular() {
  const nagivate = useNavigate();
  const [movieId, setMovieId] = useState<number>();
  const movieMatch = useMatch("movie/:movieId");
  const { scrollY } = useScroll();

  // api - popular 영화 리스트 호출
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  // cardBox를 누르면 url를 설정한다.
  const onCardBoxClicked = (id: number) => {
    nagivate(`movie/${id}`);
    setMovieId(id);
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <Grid>Loading...</Grid>
        </Container>
      ) : (
        <Container>
          <Grid variants={containerVars} initial="init" animate="animate">
            <AnimatePresence>
              {data?.map((character, i) => (
                // 구조 변경 필요
                // <CardBox />
                <Card
                  key={i}
                  variants={cardVars}
                  initial="init"
                  animate="doing"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  layoutId={String(`${ETitle.POPULAR}${character.id}`)}
                  onClick={() => onCardBoxClicked(character.id)}
                >
                  <Img src={makeImagePath(character.poster_path)} />
                </Card>
              ))}
            </AnimatePresence>
          </Grid>

          <AnimatePresence>
            {movieMatch ? (
              <>
                <DarkOverlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                <ModalContainer
                  layoutId={`${ETitle.POPULAR}${String(
                    movieMatch.params.movieId
                  )}`}
                  style={{ top: scrollY.get() + 35 }}
                >
                  {movieId && <Modal id={movieId} />}
                </ModalContainer>
              </>
            ) : null}
          </AnimatePresence>
        </Container>
      )}
    </>
  );
}

export default Popular;
