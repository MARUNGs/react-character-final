import { useNavigate } from "react-router-dom";
import { makeImagePath } from "../api/data";
import { Card, Img } from "../styles/ScreenStyled";
import { imgVars, itemVars } from "../styles/variants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerSelector, idSelector } from "../store/atoms";

interface ICardBox {
  id: number;
  imgPath: string;
}

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
        layoutId={String(`${header}-${id}`)}
        variants={itemVars}
        // initial="hidden"
        // animate="visible"
        // whileHover="hover"
        // transition={{ type: "tween" }}
        onClick={() => onCardBoxClicked(id)}
      >
        <Img
          src={makeImagePath(imgPath)}
          variants={imgVars}
          whileHover="hover"
        />
      </Card>
    </>
  );
}

export default CardBox;
