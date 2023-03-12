"use client";
import GameCard from "@/components/GameCard";
import type { Result } from "@/types/games";
import { useGameStore } from "@/store/games";

type Props = {
  results: Result[] | any;
};

function GameCardsContainer({ results }: Props) {
  const { gamesData } = useGameStore();
  const setGames = useGameStore((state) => state.setGames);

  if (gamesData.length) {
    results = [...gamesData];
  }

  return (
    <section className="flex flex-wrap justify-center gap-5">
      {results.map((game: Result) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}

export default GameCardsContainer;
