import axios from "axios";
import { Result } from '@/types/games';
import { Games } from './types/games';

const gamesApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGames = async () => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6`
  );
  return res.data;
};

export const getGamesByPlatform = async (id: number | undefined) => {
  const res = await gamesApi.get<Games>(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&platforms=${id}`
  );
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