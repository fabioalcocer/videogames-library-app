import { create } from "zustand";
import { Games, Result } from "@/types/games";

type titleState = {
  titleName: string;
  setTitle: (title: string) => void;
};

type gamesState = {
  gamesData: Result[];
  setGames: (games: Result[]) => void;
};

export const useGameStore = create<gamesState>((set) => ({
  gamesData: [],
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
