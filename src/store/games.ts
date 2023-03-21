import { create } from "zustand";
import { Result } from "@/types/games";

type gamesState = {
  gamesData: Result[] | null;
  setGames: (games: Result[]) => void;
};

export const useGameStore = create<gamesState>((set) => ({
  gamesData: null,
  setGames: (games: any) =>
    set((state) => ({
      gamesData: games,
    })),
}));