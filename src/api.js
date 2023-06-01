export function fetchChar() {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters`).then((res) => res.json());
}
