import styled from "styled-components";
import { getMovie, makeImagePath } from "../api/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface CardProps {
  key: number;
  id: number;
  img: string;
}

interface IMovie {}

const CardBox = styled(motion.div).attrs({
  className: "h-90 border border-gray-300 rounded-lg",
})``;

const Img = styled.img`
  border-radius: 15px;
  filter: brightness(30%);

  &:hover {
    filter: brightness(100%);
    transition: 0.7s;
  }
`;

const Card: React.FC<CardProps> = ({ id, img }) => {
  const { isLoading, data } = useQuery<IMovie>({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
  });

  console.log(data);

  return (
    <>
      <Link to={`movie?id=${id}`} state={{ id }}>
        <CardBox>
          <Img src={makeImagePath(img)} />
        </CardBox>
      </Link>
    </>
  );
};

export default Card;
