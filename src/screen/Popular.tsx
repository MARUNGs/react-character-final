import { useQuery } from "@tanstack/react-query";
import { getPopular, makeImagePath } from "../api/data";
import CardContainer from "../components/CardContainer";
import { useRecoilState } from "recoil";
import { headerSelector, popularSelector } from "../store/atoms";
import { useEffect, useState } from "react";
import {
  Container,
  GridContainer,
  CardBox,
  Img,
  // Overlay,
} from "../styles/CardContainerStyled";
import { ETitle, IPopular } from "../types/interface";

function Popular() {
  const [id, setId] = useState<string | null>(null);

  // api
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Container>
          <GridContainer>
            {data?.map((character, i) => (
              <CardBox
                key={i}
                layoutId={String(`${ETitle.POPULAR}${id}`)}
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

export default Popular;
