import { getGames } from "@/api";
import { Result } from "../../types/games";
import { findIdPlatform } from "@/utils/findIdPlatform";
import GameCard from "@/components/GameCard";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Slug({ params: { slug } }: Props) {
  const id = findIdPlatform(slug);
  const { results } = await getGames(id);

  return (
    <section className="flex flex-wrap justify-center gap-5">
      {results.map((game: Result) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
}
