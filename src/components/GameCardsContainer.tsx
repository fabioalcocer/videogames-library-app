"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import { useWishlistStoreId } from "@/store/wishlist";
import { useGameStore } from "@/store/games";
import { useLibraryStoreId } from "@/store/library";

type Props = {
  results: Result[];
};

function GameCardsContainer({ results }: Props) {
  const { gamesData } = useGameStore();
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <section className="mt-7 grid grid-flow-row-dense grid-cols-1 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
      {gamesData?.length ? (
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
          {results.map((game: Result) => (
            <GameCard
              key={game.id}
              game={game}
              inWishlist={wishlistGamesId.includes(game.id)}
              inLibrary={libraryGamesId.includes(game.id)}
            />
          ))}
        </>
      )}
    </section>
  );
}

export default GameCardsContainer;
