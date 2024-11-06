import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div.attrs({
  className: "flex justify-center px-4 m-20",
})``;

export const GridContainer = styled.div.attrs({
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

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;
