import axios from "axios";
import { Genre } from "./types/games";

const gamesApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getGames = async (id: number | undefined) => {
  console.log(id)
  const res = await gamesApi.get(
    `/games?key=197ef46d995a4a3ab410d8bb4d6392b6&platforms=${id}`
  );
  return res.data;
};

export const getPlatforms = async () => {
  const res = await gamesApi.get(
    "/platforms/lists/parents?key=197ef46d995a4a3ab410d8bb4d6392b6&"
  );
  const resultPlatforms = res.data.results.map((platform: Genre) => {
    const resultPlatform = { id: platform.id, name: platform.name };
    return resultPlatform;
  });

  return resultPlatforms;
};
