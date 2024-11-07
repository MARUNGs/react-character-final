import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div.attrs({
  className: "flex justify-center px-4 m-20",
})``;

export const GridContainer = styled(motion.div).attrs({
  className: `grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full`,
})``;

export const CardBox = styled(motion.div).attrs({
  className: "h-90 border border-gray-300 rounded-lg",
})``;

export const Img = styled.img`
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
`;

export const Movie = styled(motion.div)`
  // top 설정은 컴포넌트 내부에서 style로 설정할 것.
  position: absolute;

  width: 40vw;
  height: 80vh;

  border-radius: 15px;
  overflow: hidden;

  background-color: ${(props) => props.theme.bgColor};
`;

export const MovieImg = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;
