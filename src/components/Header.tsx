import styled from "styled-components";
import { motion } from "framer-motion";
// import { useRecoilState } from "recoil";
// import { headerSelector, IObject } from "../store/atoms";
import { Link, useMatch } from "react-router-dom";

const HeaderContainer = styled.div.attrs({
  className: `flex justify-center`,
})`
  margin-top: 5%;
  font-size: 20px;
  font-weight: 800;
  gap: 1%;
`;

// const Btn = styled(motion.button)`
//   width: 200px;
//   height: 50px;
//   border-radius: 15px;
// `;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: "#181818";
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &:hover {
    color: "#2f2f2f";
  }
`;

const SpanCircle = styled(motion.span)`
  width: 5px;
  height: 5px;
  background-color: #e51013;
  border-radius: 5px;

  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;

  margin: 0 auto;
`;

const btnVars = {
  hover: {
    textShadow: "3px 3px 3px #232332",
    backgroundColor: "rgba(209, 204, 192, 1)",
  },
};

function Header() {
  const popularUrl = useMatch("/");
  const comingSoonUrl = useMatch("/coming-soon");
  const nowPlayingUrl = useMatch("/now-playing");

  // const [header, setHeader] = useRecoilState(headerSelector);

  // 클릭할 때 클릭대상은 true, 그 외는 false 취급한다.
  // const onClick = ({ title, flag }: IObject, i: number): void => {
  //   const list = [...header];
  //   setHeader(
  //     list.map((object, idx) =>
  //       i === idx ? { title, flag: true } : { title: object.title, flag: false }
  //     )
  //   );
  // };

  return (
    <>
      <HeaderContainer>
        <Items>
          <Link to={``}>
            <Item>
              POPULAR {popularUrl && <SpanCircle layoutId="circle" />}
            </Item>
          </Link>
          <Link to={`coming-soon`}>
            <Item>
              COMING SOON {comingSoonUrl && <SpanCircle layoutId="circle" />}
            </Item>
          </Link>
          <Link to={`now-playing`}>
            <Item>
              NOW_PLAYING {nowPlayingUrl && <SpanCircle layoutId="circle" />}
            </Item>
          </Link>

          {/* {header?.map(({ title, flag }, i) => (
            <Link
              key={i}
              to={
                title === "POPULAR"
                  ? ``
                  : title === "COMING"
                  ? `coming-soon`
                  : `now-playing`
              }
            >
              <Btn
                onClick={() => onClick({ title, flag }, i)}
                variants={btnVars}
                animate={flag ? "hover" : ""}
                whileHover={flag ? "hover" : ""}
              >
                {title}
              </Btn>
            </Link>
          ))} */}
        </Items>
      </HeaderContainer>
    </>
  );
}

export default Header;
