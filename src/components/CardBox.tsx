import { useNavigate } from "react-router-dom";
import { makeImagePath } from "../api/data";
import { Card, Img } from "../styles/ScreenStyled";
import { ETitle } from "../types/interface";
// import { cardVars } from "../types/variants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerSelector, idSelector } from "../store/atoms";

interface ICardBox {
  id: number;
  imgPath: string;
}

export const cardVars = {
  init: {
    scale: 0,
  },
  doing: {
    scale: 1,
  },
  hover: {
    y: -50,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

function CardBox({ id, imgPath }: ICardBox) {
  const nagivate = useNavigate();
  const setMovieId = useSetRecoilState(idSelector);
  const header = useRecoilValue(headerSelector);

  // cardBox를 누르면 url를 설정한다.
  const onCardBoxClicked = (id: number) => {
    nagivate(`/movie/${id}`);
    setMovieId(id);
  };

  return (
    <>
      <Card
        variants={cardVars}
        initial="init"
        animate="doing"
        whileHover="hover"
        transition={{ type: "tween" }}
        layoutId={String(`${header}${id}`)}
        onClick={() => onCardBoxClicked(id)}
      >
        <Img src={makeImagePath(imgPath)} />
      </Card>
    </>
  );
}

export default CardBox;
