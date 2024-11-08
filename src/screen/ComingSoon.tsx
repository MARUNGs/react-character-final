import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath } from "../api/data";
import { ETitle, IPopular } from "../types/interface";
import { useState } from "react";
import { Container, Grid, Card, Img } from "../styles/ScreenStyled";
import { AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";

const CardVars = {
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

function CommingSoon() {
  const nagivate = useNavigate();
  const movieMatch = useMatch("movie/:movieId");
  const [characterId, setCharacterId] = useState(0);

  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["comingSoon"],
    queryFn: getComingSoon,
  });

  // function
  // 1. Card를 누르면 url를 설정한다.
  // 2. 상태값에 characterId 값을 설정한다.
  const onCardClicked = (id: number) => {
    nagivate(`movie/${id}`);
    setCharacterId(id);
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <Grid>Loading...</Grid>
        </Container>
      ) : (
        <Container>
          <Grid>
            <AnimatePresence>
              {data?.map((character, i) => (
                <Card
                  key={i}
                  variants={CardVars}
                  initial="init"
                  animate="doing"
                  whileHover="hover"
                  layoutId={String(`${ETitle.COMINGSOON}${character.id}`)}
                  onClick={() => onCardClicked(character.id)}
                >
                  <Img src={makeImagePath(character.poster_path)} />
                </Card>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default CommingSoon;
