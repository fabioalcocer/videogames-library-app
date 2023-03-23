"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import { useWishlistStoreId } from "@/store/wishlist";
import { useGameStore } from "@/store/games";
import { useLibraryStoreId } from "@/store/library";
import { useGames } from "@/hooks/useInfiniteScroll";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

function GameCardsContainer() {
  const { games, isLoading, hasNextPage, fetchNextPage } = useGames();
  const { gamesData } = useGameStore();
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <section className="min-h-fit min-w-full overflow-x-hidden">
      <InfiniteScroll
        className="mt-7 grid min-h-full grid-cols-1 place-items-center gap-4 overflow-auto md:grid-cols-3 lg:grid-cols-4"
        dataLength={games.length}
        hasMore={hasNextPage || isLoading}
        next={() => fetchNextPage()}
        loader={<Loader />}
      >
        {games.map((game: Result) => (
          <GameCard
            key={game.id}
            game={game}
            inWishlist={wishlistGamesId.includes(game.id)}
            inLibrary={libraryGamesId.includes(game.id)}
          />
        ))}

        {/* {gamesData?.length ? (
        <>
        {gamesData.map((game: Result) => (
          <GameCard
          key={game.id}
          game={game}
          inWishlist={wishlistGamesId.includes(game.id)}
          inLibrary={libraryGamesId.includes(game.id)}
          />
          ))}
          </>
          ) : (
            <>
            
            </>
          )} */}
      </InfiniteScroll>
    </section>
  );
}

export default GameCardsContainer;
