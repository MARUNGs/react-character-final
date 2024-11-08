import { Link, useMatch } from "react-router-dom";
import {
  HeaderContainer,
  Item,
  Items,
  SpanCircle,
} from "../styles/HeaderStyled";
import { useSetRecoilState } from "recoil";
import { headerSelector } from "../store/atoms";
import { ETitle } from "../types/interface";

function Header() {
  const popularUrl = useMatch("/");
  const comingSoonUrl = useMatch("/coming-soon");
  const nowPlayingUrl = useMatch("/now-playing");
  const setHeaderState = useSetRecoilState(headerSelector);

  // 타이틀 상태값 저장
  const onClick = (title: string) => setHeaderState(title);

  return (
    <>
      <HeaderContainer>
        <Items>
          <Link to={``} onClick={() => onClick(ETitle.POPULAR)}>
            <Item>
              POPULAR{" "}
              {popularUrl && <SpanCircle layoutId="circle">✨</SpanCircle>}
            </Item>
          </Link>
          <Link
            to={`${ETitle.COMINGSOON}`}
            onClick={() => onClick(ETitle.COMINGSOON)}
          >
            <Item>
              COMING SOON{" "}
              {comingSoonUrl && <SpanCircle layoutId="circle">✨</SpanCircle>}
            </Item>
          </Link>
          <Link
            to={`${ETitle.NOWPLAYING}`}
            onClick={() => onClick(ETitle.NOWPLAYING)}
          >
            <Item>
              NOW PLAYING{" "}
              {nowPlayingUrl && <SpanCircle layoutId="circle">✨</SpanCircle>}
            </Item>
          </Link>
        </Items>
      </HeaderContainer>
    </>
  );
}

export default Header;
