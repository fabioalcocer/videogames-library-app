import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { searchGames } from "@/api";

async function fetchGames(ctx: QueryFunctionContext) {
  const query = ctx.queryKey[1];
  if (query) {
    const { results } = await searchGames(query as string);
    return results;
  }
}

export function useSetSearchData(query: string) {
  return useQuery(["games", query], fetchGames);
}
