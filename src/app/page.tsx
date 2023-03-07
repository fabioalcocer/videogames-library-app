import { getGames } from "@/api";
import GameCard from "@/components/GameCard";
import TabsSection from "@/components/TabsSection";
import { Result } from "../types/games";

export default async function Home() {
  // const { results } = await getGames();

  return (
    <main className="w-full py-10 px-5 text-zinc-100 flex flex-col gap-5">
      <TabsSection />
      {/* <section className="flex flex-wrap justify-center gap-5">
        {results.map((game: Result) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section> */}
    </main>
  );
}
