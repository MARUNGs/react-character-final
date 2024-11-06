import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath } from "../api/data";
import { ETitle, IPopular } from "../types/interface";
import CardContainer from "../components/CardContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import { comingSoonSelector, headerSelector } from "../store/atoms";
import { useEffect, useState } from "react";
import {
  Container,
  GridContainer,
  CardBox,
  Img,
  // Overlay,
} from "../styles/CardContainerStyled";

function CommingSoon() {
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["comingSoon"],
    queryFn: getComingSoon,
  });

  return (
    <>
      {isLoading ? (
        <h1>loading ...</h1>
      ) : (
        <Container>
          <GridContainer>
            {data?.map((character, i) => (
              <CardBox
                key={i}
                layoutId={`${ETitle.COMINGSOON}${id}`}
                onClick={() => setId(String(character.id))}
              >
                <Img src={makeImagePath(character.poster_path)} />
              </CardBox>
            ))}
          </GridContainer>
        </Container>
      )}
    </>
  );
}

export default CommingSoon;
