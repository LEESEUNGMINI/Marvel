const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";
import qs from "qs";

export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
// [GET] Events List
export async function apiGetEvents({ pageParam }) {
  console.log(pageParam);
  const offset = pageParam * 10;
  return await fetch(
    `${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
}
// 시리즈
export async function apiGetSeries() {
  return await fetch(`${BASE_URL}/series?limit=10&apikey=${API_KEY}`, {
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

// params: id
// [GET] Characters Detail
export async function apiGetCharacterDetail({ queryKey }) {
  const id = queryKey[1].id;
  try {
    return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiPostEmail(data) {
  // const formData = new FormData();
  // formData.append("name", data.name);
  // formData.append("email", data.email);
  // formData.append("message", data.message);

  try {
    console.log(data);
    return await fetch(
      "https://api.neople.co.kr/df/jobs?apikey=Mw0fYJwiAJL76wBNq1mezxFH01NMosOZ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function expressTest() {
  try {
    return await fetch(
      "https://openapi.foodsafetykorea.go.kr/api/100e982ab52b4da983/COOKRCP01/json/1/5"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
