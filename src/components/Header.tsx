import { Link, useMatch } from "react-router-dom";
import {
  HeaderContainer,
  Item,
  Items,
  SpanCircle,
} from "../styles/HeaderStyled";

function Header() {
  const popularUrl = useMatch("/");
  const comingSoonUrl = useMatch("/coming-soon");
  const nowPlayingUrl = useMatch("/now-playing");

  return (
    <>
      <HeaderContainer>
        <Items>
          <Link to={``}>
            <Item>
              POPULAR{" "}
              {popularUrl && <SpanCircle layoutId="circle">✨</SpanCircle>}
            </Item>
          </Link>
          <Link to={`coming-soon`}>
            <Item>
              COMING SOON{" "}
              {comingSoonUrl && <SpanCircle layoutId="circle">✨</SpanCircle>}
            </Item>
          </Link>
          <Link to={`now-playing`}>
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
