import axios from "axios";
const BASE_URL = process.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function getActivity(param: string) {
  const url = `${BASE_URL}${param}`;
  try {
    const response = await instance.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
