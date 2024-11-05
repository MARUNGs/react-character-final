import axios from "axios";

const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export async function getPopular() {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/popular`);

  return results;
}

export async function getNowPlaying() {
  return fetch(`${BASE_URL}/now-playing`).then((r) => r.json());
}

export async function getComingSoon() {
  return fetch(`${BASE_URL}/coming-soon`).then((r) => r.json());
}

export async function getMovie(id: number) {
  const { data } = await axios.get(`${BASE_URL}/movie?id=${id}`);
  return data;
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
