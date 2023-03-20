"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import {
  useGameStore,
  useWishlistStoreId,
  useLibraryStoreId,
} from "@/store/games";

type Props = {
  results: Result[];
};

function GameCardsContainer({ results }: Props) {
  const { gamesData } = useGameStore();
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <section className="mt-7 flex flex-wrap justify-center gap-5 md:justify-start">
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
