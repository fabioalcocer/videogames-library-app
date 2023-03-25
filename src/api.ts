import axios from "axios";
import { Games } from "./types/games";

let current_page = 0;
let current_page_platform = 0;

const gamesApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGames = async (
  currentPage: number,
  setPage: (page: number) => void
) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&page=${currentPage}`
  );
  const data = res.data;

  setPage(currentPage);
  
  console.log({
    ...data,
    current_page: currentPage,
  });

  return {
    ...data,
    current_page: currentPage,
  };
};

export const getGamesByPlatform = async (
  id: number | undefined,
  page: number
) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&page=${page}&platforms=${id}`
  );

  const data = res.data;

  current_page_platform++;
  console.log({
    ...data,
    current_page: current_page_platform,
  });
  return {
    ...data,
    current_page: current_page_platform,
  };
};

export const searchGames = async (query: string) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&search=${query}`
  );
  return res.data;
};

export const getPlatforms = async () => {
  const res = await gamesApi.get(
    "/platforms/lists/parents?key=197ef46d995a4a3ab410d8bb4d6392b6&"
  );

  return res.data.results;
};
