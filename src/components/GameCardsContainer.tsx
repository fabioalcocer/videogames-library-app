"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import { useGameStore } from "@/store/games";

type Props = {
  results: Result[];
};

function GameCardsContainer({ results }: Props) {
  const { gamesData } = useGameStore();

  return (
    <section className="flex flex-wrap justify-center gap-5">
      {gamesData ? (
        <>
          {gamesData.map((game: Result) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      ) : (
        <>
          {results.map((game: Result) => (
            <GameCard key={game.id} game={game} />
          ))}
        </>
      )}
    </section>
  );
}

export default GameCardsContainer;
