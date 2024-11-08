import { useMatch, useNavigate } from "react-router-dom";
import { ETitle, IMovie } from "../types/interface";
import { useQuery } from "@tanstack/react-query";
import { getMovie, makeImagePath } from "../api/data";
import {
  ModalContainer,
  MovieContent,
  MovieImgDiv,
  MovieTitle,
  MovieX,
  Ul,
} from "../styles/ScreenStyled";
import { headerSelector } from "../store/atoms";
import { useRecoilValue } from "recoil";

interface IModal {
  id: number;
  scrollY: number;
}

function Modal({ id, scrollY }: IModal) {
  const nagivate = useNavigate();
  const header = useRecoilValue(headerSelector);
  const movieMatch = useMatch("movie/:movieId");

  // api - 영화 상세내용
  const { data } = useQuery<IMovie>({
    queryKey: ["movie", "id"],
    queryFn: () => getMovie(id),
    enabled: !!id,
  });

  const onClick = () => {
    const title = header === ETitle.POPULAR ? "" : header;
    nagivate(`/${title}`);
  };

  return (
    <>
      <ModalContainer
        layoutId={`${movieMatch?.params.movieId + ""}`}
        style={{ top: scrollY + 35 }}
      >
        <MovieX
          onClick={onClick}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
          ></path>
        </MovieX>
        <MovieImgDiv $bgImg={makeImagePath(data?.backdrop_path || "")} />
        <MovieTitle>{data?.title}</MovieTitle>
        <MovieContent>{data?.overview}</MovieContent>

        <Ul>
          <li>Budget: ${data?.budget.toLocaleString("en-US")}</li>
          <li>Rivenue: ${data?.revenue.toLocaleString("en-US")}</li>
          <li>Runtime: {data?.runtime} minutes</li>
          <li>Rating: {Number(data?.vote_average).toFixed(1)}</li>
          <li>
            homepage: <a href={data?.homepage}>{data?.homepage}</a>
          </li>
        </Ul>
      </ModalContainer>
    </>
  );
}

export default Modal;
