import { getGamesByPlatform } from "@/api";
import GameCardsContainer from "@/components/GameCardsContainer";
import { findIdPlatform } from "@/utils/findIdPlatform";
import PlatformPageClient from "./client";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Slug({ params: { slug } }: Props) {
  const id = findIdPlatform(slug);
  return <PlatformPageClient id={id} />;
}
