import { useQuery } from "@tanstack/react-query";
import { queryCharacters } from "../api/data";

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  // api
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ["characterList"],
    queryFn: queryCharacters,
    select: (data) => data?.slice(0, 100),
  });

  return (
    <>
      <h1>home</h1>
    </>
  );
}

export default Home;
