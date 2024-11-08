import { useNavigate } from "react-router-dom";
import { makeImagePath } from "../api/data";
import { Card, Img } from "../styles/ScreenStyled";
import { cardVars } from "../types/variants";
import { useSetRecoilState } from "recoil";
import { idSelector } from "../store/atoms";

interface ICardBox {
  id: number;
  imgPath: string;
}

function CardBox({ id, imgPath }: ICardBox) {
  const nagivate = useNavigate();
  const setMovieId = useSetRecoilState(idSelector);

  // cardBox를 누르면 url를 설정한다.
  const onCardBoxClicked = (id: number) => {
    nagivate(`/movie/${id}`);
    setMovieId(id);
  };

  return (
    <>
      <Card
        layoutId={String(`${id}`)}
        variants={cardVars}
        initial="init"
        animate="doing"
        whileHover="hover"
        transition={{ type: "tween" }}
        onClick={() => onCardBoxClicked(id)}
      >
        <Img src={makeImagePath(imgPath)} />
      </Card>
    </>
  );
}

export default CardBox;
