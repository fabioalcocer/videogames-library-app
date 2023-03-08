import { getGames, getPlatforms } from "@/api";
import DropDown from "@/components/DropDown";
import GameCard from "@/components/GameCard";
import TabsSection from "@/components/TabsSection";
import { Result } from "../types/games";
import { Platform } from "@/types/platforms";

export default async function Home() {
  const { results } = await getGames();
  const platforms: Platform[] = await getPlatforms();

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-5 py-8 px-5 text-zinc-100">
      <h4 className="text-center text-4xl font-bold leading-[16px]">
        New and trending
      </h4>
      <p className="text-center">Based on player counts and release date</p>
      <TabsSection>
        <DropDown platforms={platforms} />
      </TabsSection>
      <section className="flex flex-wrap justify-center gap-5">
        {results.map((game: Result) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}
