export function fetchChar() {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then((res) => res.json());
}
export function fetchCharDetail(char) {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters/${char}`).then((res) =>
    res.json()
  );
}
