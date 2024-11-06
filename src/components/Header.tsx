import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { headerSelector, IObject } from "../store/atoms";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div.attrs({
  className: `flex justify-center`,
})`
  margin-top: 5%;
  font-size: 20px;
  font-weight: 800;
  gap: 1%;
`;

const Btn = styled(motion.button)`
  width: 200px;
  height: 50px;
  border-radius: 15px;
`;

const btnVars = {
  hover: {
    textShadow: "3px 3px 3px #232332",
    backgroundColor: "rgba(209, 204, 192, 1)",
  },
};

function Header() {
  const [header, setHeader] = useRecoilState(headerSelector);

  // 클릭할 때 클릭대상은 true, 그 외는 false 취급한다.
  const onClick = ({ title, flag }: IObject, i: number): void => {
    const list = [...header];
    setHeader(
      list.map((object, idx) =>
        i === idx ? { title, flag: true } : { title: object.title, flag: false }
      )
    );
  };

  return (
    <>
      <HeaderContainer>
        {header?.map(({ title, flag }, i) => (
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
        ))}
      </HeaderContainer>
    </>
  );
}

export default Header;
