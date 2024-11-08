import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div.attrs({
  className: "flex justify-center px-4 m-20",
})``;

export const Grid = styled(motion.div).attrs({
  className: `grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full`,
})``;

export const Card = styled(motion.div).attrs({
  className: "h-90 border border-gray-300 rounded-lg",
})`
  cursor: pointer;
`;

export const Img = styled(motion.img)`
  border-radius: 15px;
  filter: brightness(30%);

  &:hover {
    filter: brightness(100%);
    transition: 0.7s;
  }
`;

export const DarkOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const ModalContainer = styled(motion.div)`
  // top 설정은 컴포넌트 내부에서 style로 설정할 것.
  position: absolute;

  width: 38vw;
  height: 90vh;

  border-radius: 15px;
  overflow: hidden;

  /* background-color: ${(props) => props.theme.bgColor}; */
  background-color: black;
`;

export const MovieImgDiv = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(to top, black, transparent),
    url(${(props) => props.$bgImg});
`;

export const MovieTitle = styled.h3`
  font-size: 23px;
  margin-top: 5px;
  margin-left: 10px;
`;

export const MovieContent = styled.p`
  width: 90%;

  margin-top: 15px;
  margin-left: 10px;

  line-height: 20px;
`;

export const MovieX = styled.svg`
  width: 30px;
  height: 30px;
  opacity: 0.5; // 불투명도

  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;

export const Ul = styled.ul`
  margin-top: 15px;
  margin-left: 10px;

  li {
    margin-bottom: 5px;
  }
`;
