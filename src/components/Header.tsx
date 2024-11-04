import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { titleSelector, titleFlagSelector } from "../store/atoms";

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
  const list = useRecoilValue(titleSelector);
  const [flagList, setFlagList] = useRecoilState(titleFlagSelector);

  // 클릭할 때 클릭대상은 true, 그 외는 false 취급한다.
  const onClick = (i: number) => {
    const fList = [...flagList];
    setFlagList(fList.map((flag, idx) => (i === idx ? true : false)));
  };

  return (
    <>
      <HeaderContainer>
        {list?.map((title, i) => (
          <Btn
            key={i}
            onClick={() => onClick(i)}
            variants={btnVars}
            animate={flagList[i] ? "hover" : ""}
            whileHover={flagList[i] ? "hover" : ""}
          >
            {title}
          </Btn>
        ))}
      </HeaderContainer>
    </>
  );
}

export default Header;
