import { useQuery } from "@tanstack/react-query";
import { getNowPlaying, makeImagePath } from "../api/data";
import { ETitle, IPopular } from "../types/interface";
import { useState } from "react";
import {
  Container,
  GridContainer,
  CardBox,
  Img,
} from "../styles/CardContainerStyled";
import { AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";

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

function NowPlaying() {
  const [id, setId] = useState<string | null>(null);
  const nagivate = useNavigate();
  const movieMatch = useMatch("movie/:movieId");
  const [characterId, setCharacterId] = useState(0);

  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlaying,
  });

  // function
  // 1. cardBox를 누르면 url를 설정한다.
  // 2. 상태값에 characterId 값을 설정한다.
  const onCardBoxClicked = (id: number) => {
    nagivate(`movie/${id}`);
    setCharacterId(id);
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <GridContainer>Loading...</GridContainer>
        </Container>
      ) : (
        <Container>
          <GridContainer>
            <AnimatePresence>
              {data?.map((character, i) => (
                <CardBox
                  key={i}
                  variants={cardBoxVars}
                  initial="init"
                  animate="doing"
                  whileHover="hover"
                  layoutId={String(`${ETitle.COMINGSOON}${character.id}`)}
                  onClick={() => onCardBoxClicked(character.id)}
                >
                  <Img src={makeImagePath(character.poster_path)} />
                </CardBox>
              ))}
            </AnimatePresence>
          </GridContainer>
        </Container>
      )}
    </>
  );
}

export default NowPlaying;
