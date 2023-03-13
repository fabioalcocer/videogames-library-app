import { create } from "zustand";
import { Result } from "@/types/games";

type titleState = {
  titleName: string;
  setTitle: (title: string) => void;
};

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

export const useTitleStore = create<titleState>((set) => ({
  titleName: "New and trending",
  setTitle: (title: string) =>
    set((state) => ({
      titleName: title,
    })),
}));
