import { getGames } from "@/api";
import GameCard from "@/components/GameCard";
import { Result } from "../types/games";

export default async function Home() {
  const { results } = await getGames();

  return (
    <main className="flex min-h-screen w-full flex-wrap justify-center gap-5 bg-zinc-900 py-10 text-zinc-100">
      {results.map((game: Result) => (
        <GameCard key={game.id} game={game} />
      ))}
    </main>
  );
}
