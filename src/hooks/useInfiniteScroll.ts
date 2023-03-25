import { useInfiniteQuery } from "@tanstack/react-query";
import { getGames, getGamesByPlatform } from "@/api";
import { Result } from "@/types/games";
import { usePageStore } from "@/store/page";

export function useGames(id?: number) {
  const { currentPage } = usePageStore();
  const setPage = usePageStore((state) => state.setPage);

  const result = useInfiniteQuery(
    ["games", id],
    () => {
      const data = id
        ? getGamesByPlatform({ id, currentPage, setPage })
        : getGames({ currentPage, setPage });
      return data;
    },
    {
      getNextPageParam: () => {
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
