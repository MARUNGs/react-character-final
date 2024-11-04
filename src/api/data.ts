const BASE_URL = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters`;

export async function queryCharacters() {
  return fetch(BASE_URL).then((response) => response.json());
}

export async function queryCharacterInfo(id: number) {
  return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
}
