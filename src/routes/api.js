const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

// [GET] Events List
export async function apiGetEvents() {
  return await fetch(`${BASE_URL}/events?limit=10&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
// 시리즈
export async function apiGetSeries() {
  return await fetch(`${BASE_URL}/series?limit=5&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
// [GET] Characters List
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  return await fetch(
    `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
}
