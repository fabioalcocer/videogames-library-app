"use client";
import { useGameStore } from "@/store/games";
import { Result } from "../types/games";

type Props = {
  results: Result[];
};

function BtnGetData({ results }: Props) {
  const { gamesData } = useGameStore();
  const setGames = useGameStore((state) => state.setGames);

  return (
    <button
      onClick={() => {
        if (results) {
          setGames(results);
        }
      }}
    >
      GetData
    </button>
  );
}

export default BtnGetData;
