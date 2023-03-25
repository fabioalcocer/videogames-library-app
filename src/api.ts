import axios from "axios";
import { Games } from "./types/games";

type getGamesProps = {
  currentPage: number;
  setPage: (page: number) => void;
};

type getPlatformsProps = getGamesProps & {
  id: number | undefined;
};

const gamesApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGames = async ({ currentPage, setPage }: getGamesProps) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&page=${currentPage}`
  );

  setPage(currentPage);

  return res.data;
};

export const getGamesByPlatform = async ({
  id,
  currentPage,
  setPage,
}: getPlatformsProps) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&page=${currentPage}&platforms=${id}`
  );

  setPage(currentPage);

  return res.data;
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
