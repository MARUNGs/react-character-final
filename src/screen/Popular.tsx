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
import { IPopular } from "../types/interface";

function Popular() {
  const [id, setId] = useState<string | null>(null);

  // api
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["popular"],
    queryFn: getPopular,
  });
  const [popular, setPopular] = useRecoilState(popularSelector);

  // api 데이터 저장
  useEffect(() => {
    data !== undefined && setPopular(data);
  }, [data, setPopular]);

  console.log(popular);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <Container>
          <GridContainer>
            {popular?.map((character, i) => (
              <CardBox
                key={i}
                layoutId={String(id)}
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
