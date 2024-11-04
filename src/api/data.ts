import axios from "axios";

const BASE_URL = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters`;

export async function queryCharacters() {
  const {
    data: {
      data: { results },
    },
  } = await axios.get(BASE_URL);
  return results;
}

export async function queryCharacterInfo(id: number) {
  return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
}
