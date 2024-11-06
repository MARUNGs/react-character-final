import { useState } from "react";
import { makeImagePath } from "../api/data";
import { DataProps } from "../types/interface";
import {
  Container,
  GridContainer,
  CardBox,
  Img,
  // Overlay,
} from "../styles/CardContainerStyled";

const CardContainer = ({ data, title }: DataProps) => {
  // state
  const [id, setId] = useState<string | null>(null);

  return (
    <>
      <Container>
        <GridContainer>
          {data?.map((character, i) => (
            <CardBox
              key={`${title}_${i}`}
              layoutId={String(id)}
              onClick={() => setId(String(character.id))}
            >
              <Img src={makeImagePath(character.poster_path)} />
            </CardBox>
          ))}
        </GridContainer>

        {/* <AnimatePresence>
          {id ? (
            <Overlay>
              <CardBox
                layoutId={id}
                key={id}
                style={{ width: 400, height: 200 }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence> */}
      </Container>
    </>
  );
};

export default CardContainer;
