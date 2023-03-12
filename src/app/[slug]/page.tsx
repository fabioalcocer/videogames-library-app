import { getGames } from "@/api";
import { findIdPlatform } from "@/utils/findIdPlatform";
import GameCardsContainer from "@/components/GameCardsContainer";

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
