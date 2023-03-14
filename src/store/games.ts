import { create } from "zustand";
import { Result } from "@/types/games";

type gamesState = {
  gamesData: Result[] | null;
  setGames: (games: Result[]) => void;
};

type titleState = {
  titleText: string;
  setTitle: (title: string) => void;
};

export const useGameStore = create<gamesState>((set) => ({
  gamesData: null,
  setGames: (games: any) =>
    set((state) => ({
      gamesData: games,
    })),
}));

export const useTitleStore = create<titleState>((set) => ({
  titleText: "New and trending",
  setTitle: (title: string) =>
    set((state) => ({
      titleText: title,
    })),
}));