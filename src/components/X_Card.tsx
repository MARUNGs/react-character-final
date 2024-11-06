import styled from "styled-components";
import { getMovie, makeImagePath } from "../api/data";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  key: number;
  id: number;
  img: string;
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: object;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: object;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object;
  production_countries: object;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: object;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

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

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card: React.FC<CardProps> = ({ id, img }) => {
  const { isLoading, data } = useQuery<IMovie>({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
  });
  const [paramId, setParamId] = useState(id);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <CardBox>
            <Img src={makeImagePath(img)} />
          </CardBox>
        </>
      )}
    </>
  );
};

export default Card;
