import axios from "axios";

const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

// popular 영화목록
export async function getPopular() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/popular`);

  return results;
}

// nowPlaying 영화목록
export async function getNowPlaying() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/now-playing`);
  return results;
}

// comingSoon 영화목록
export async function getComingSoon() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/coming-soon`);

  return results;
}

// 1개의 영화 보여주기
export async function getMovie(id: number) {
  const { data } = await axios.get(`${BASE_URL}/movie?id=${id}`);
  return data;
}

// 이미지 조회
export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

// 뒷배경 이미지 조회
export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
