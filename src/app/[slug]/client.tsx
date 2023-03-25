"use client";
import GameCard from "@/components/GameCard";
import { useGames } from "@/hooks/useInfiniteScroll";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteLoader from "@/components/InfiniteLoader";
import { useWishlistStoreId } from "@/store/wishlist";
import { useLibraryStoreId } from "@/store/library";
import type { Result } from "@/types/games";

type Props = {
  id?: number;
};

function PlatformPageClient({ id }: Props) {
  const { games, isLoading, hasNextPage, fetchNextPage } = useGames(id);
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <div>
      <InfiniteScroll
        className="relative mt-7 grid min-h-[250px] grid-cols-1 place-content-center place-items-center gap-4 py-2 md:grid-cols-3 lg:grid-cols-4"
        dataLength={games.length}
        hasMore={hasNextPage || isLoading}
        next={() => fetchNextPage()}
        loader={<InfiniteLoader />}
      >
        {games.map((game: Result) => (
          <GameCard
            key={game.id}
            game={game}
            inWishlist={wishlistGamesId.includes(game.id)}
            inLibrary={libraryGamesId.includes(game.id)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default PlatformPageClient;
