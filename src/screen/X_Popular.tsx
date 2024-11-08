import {
  Container,
  Grid,
  DarkOverlay,
  ModalContainer,
} from "../styles/ScreenStyled";
import { ETitle } from "../types/interface";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch } from "react-router-dom";
import { containerVars } from "../types/variants";
import Modal from "../components/Modal";
import CardBox from "../components/CardBox";
import { useRecoilValue } from "recoil";
import { idSelector } from "../store/atoms";
import { useCustomQuery } from "../hooks/useQueryTitle";

function Popular() {
  const movieId = useRecoilValue(idSelector);
  const movieMatch = useMatch("movie/:movieId");
  const { scrollY } = useScroll();

  // api - 영화 리스트 호출
  const { isLoading, data } = useCustomQuery();

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
              {data?.map((info) => (
                <CardBox
                  key={info.id}
                  id={info.id}
                  imgPath={info.poster_path}
                />
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