import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div.attrs({
  className: `flex justify-center`,
})`
  margin-top: 5%;
  font-size: 20px;
  font-weight: 800;
  gap: 1%;
`;

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

export const SpanCircle = styled(motion.span)`
  width: 50px;
  height: 5px;
  background-color: #e51013;
  border-radius: 5px;

  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;

  margin: 0 auto;
`;
