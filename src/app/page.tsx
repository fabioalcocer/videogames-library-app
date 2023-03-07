import { getGames } from "@/api";
import GameCard from "@/components/GameCard";
import { Result } from "../types/games";

export default async function Home() {
  const { results } = await getGames();

  return (
    <main className="flex w-full flex-wrap justify-center gap-5 py-10 px-5 text-zinc-100">
      {results.map((game: Result) => (
        <GameCard key={game.id} game={game} />
      ))}
    </main>
  );
}
