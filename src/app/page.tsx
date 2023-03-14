import { getGames } from "@/api";
import GameCardsContainer from "@/components/GameCardsContainer";

export default async function Home() {
  const { results } = await getGames();

  return <GameCardsContainer results={results} />;
}
