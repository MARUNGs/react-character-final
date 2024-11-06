import { useQuery } from "@tanstack/react-query";
import { getComingSoon, makeImagePath } from "../api/data";
import { IPopular } from "../types/interface";
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
  const [comingSoon, setComingSoon] = useRecoilState(comingSoonSelector);

  // api 데이터 저장
  useEffect(() => {
    data !== undefined && setComingSoon(data);
  }, [data, setComingSoon]);

  console.log(comingSoon);

  return (
    <>
      {isLoading ? (
        <h1>loading ...</h1>
      ) : (
        <Container>
          <GridContainer>
            {comingSoon?.map((character, i) => (
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

export default CommingSoon;
