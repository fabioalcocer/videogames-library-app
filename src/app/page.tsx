import { getGames } from "@/api";
import GameCard from "@/components/GameCard";
import { Result } from "../types/games";

export default async function Home() {
  const { results } = await getGames(15);

  return (
    <section className="flex flex-wrap justify-center gap-5">
      {results.map((game: Result) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}
