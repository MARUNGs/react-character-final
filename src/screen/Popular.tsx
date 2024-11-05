import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api/data";
import styled from "styled-components";
import Card from "../components/Card";

interface IPopular {
  adult: boolean;
  backdrop_path: string;
  genre_ids: object;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Container = styled.div.attrs({
  className: "flex justify-center px-4 m-20",
})``;

const GridContainer = styled.div.attrs({
  className: `grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full`,
})``;

function Popular() {
  // api
  const { isLoading, data } = useQuery<IPopular[]>({
    queryKey: ["characterList"],
    queryFn: getPopular,
  });

  return (
    <>
      {isLoading ? (
        <h1>loading ...</h1>
      ) : (
        <Container>
          <GridContainer>
            {data?.map((character) => (
              <Card
                key={character.id}
                id={character.id}
                img={character.poster_path}
              />
            ))}
          </GridContainer>
        </Container>
      )}
    </>
  );
}

export default Popular;
