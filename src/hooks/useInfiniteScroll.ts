import { useInfiniteQuery } from "@tanstack/react-query";
import { getGames } from "@/api";
import { Result } from "@/types/games";

let currentPage = 1;
export function useGames(page?: number | undefined) {
  const result = useInfiniteQuery(
    ["games", page],
    ({ pageParam = 1 }) => {
      return getGames(pageParam);
    },
    {
      getNextPageParam: () => {
        currentPage += 1;
        return currentPage;
      },
      refetchOnWindowFocus: false,
    }
  );

  const games =
    result.data?.pages.reduce(
      (prevGames: Result[], page) => prevGames.concat(page.results),
      []
    ) ?? [];

  return { ...result, games };
}