"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import { useGameStore, useWishlistStoreId } from "@/store/games";

type Props = {
  results: Result[];
};

function GameCardsContainer({ results }: Props) {
  const { gamesData } = useGameStore();
  const { wishlistGamesId } = useWishlistStoreId();

  return (
    <section className="mt-7 flex flex-wrap justify-center gap-5 md:justify-start">
      {gamesData ? (
        <>
          {gamesData.map((game: Result) => (
            <GameCard
              key={game.id}
              game={game}
              inWishlist={wishlistGamesId.includes(game.id)}
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
            />
          ))}
        </>
      )}
    </section>
  );
}

export default GameCardsContainer;
