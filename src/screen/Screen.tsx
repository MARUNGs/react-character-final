import { Container, Grid, DarkOverlay } from "../styles/ScreenStyled";
import { AnimatePresence, useScroll } from "framer-motion";
import { useMatch } from "react-router-dom";
import { containerVars } from "../styles/variants";
import Modal from "../components/Modal";
import CardBox from "../components/CardBox";
import { useRecoilValue } from "recoil";
import { headerSelector, idSelector } from "../store/atoms";
import { useCustomQuery } from "../hooks/useQueryTitle";
import { IPopular } from "../types/interface";

function Screen() {
  const movieId = useRecoilValue(idSelector);
  const movieMatch = useMatch("movie/:movieId");
  const { scrollY } = useScroll();
  const header = useRecoilValue(headerSelector);

  // api - 영화 리스트 호출
  const { isLoading, data } = useCustomQuery();

  return (
    <>
      {!isLoading && (
        <Container>
          <Grid
            key={header}
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            {data?.map((info: IPopular) => (
              <CardBox
                key={`${header}-${info.id}`}
                id={info.id}
                imgPath={info.poster_path}
              />
            ))}
          </Grid>

          <AnimatePresence>
            {movieMatch ? (
              <>
                <DarkOverlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                {movieId && <Modal id={movieId} scrollY={scrollY.get()} />}
              </>
            ) : null}
          </AnimatePresence>
        </Container>
      )}
    </>
  );
}

export default Screen;
