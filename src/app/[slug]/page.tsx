import { getGames } from "@/api";
import GameCardsContainer from "@/components/GameCardsContainer";
import { findIdPlatform } from "@/utils/findIdPlatform";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Slug({ params: { slug } }: Props) {
  const id = findIdPlatform(slug);
  const { results } = await getGames(id);

  return <GameCardsContainer results={results} />;
}
