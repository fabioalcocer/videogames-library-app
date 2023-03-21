import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Result } from "@/types/games";

type libraryState = {
  initialLibraryGames: Result[];
  libraryGames: Result[];
  setLibraryGames: (games: Result[]) => void;
  addLibraryGame: (game: Result) => void;
  removeLibraryGame: (id: number) => void;
  updateLibraryGame: (game: Result) => void;
};

type libraryIdsState = {
  libraryGamesId: number[];
  addLibraryGameId: (id: number) => void;
  removeLibraryGameId: (id: number) => void;
};

export const useLibraryStore = create(
  persist<libraryState>(
    (set) => ({
      initialLibraryGames: [],
      libraryGames: [],
      setLibraryGames: (games: Result[]) =>
        set((state) => ({
          libraryGames: games,
        })),
      addLibraryGame: (game: Result) =>
        set((state) => ({
          initialLibraryGames: [...state.initialLibraryGames, game],
          libraryGames: [...state.libraryGames, game],
        })),
      removeLibraryGame: (id: number) =>
        set((state) => ({
          initialLibraryGames: state.initialLibraryGames.filter(
            (game: Result) => game.id !== id
          ),
          libraryGames: state.libraryGames.filter(
            (game: Result) => game.id !== id
          ),
        })),
      updateLibraryGame: (game: Result) =>
        set((state) => ({
          initialLibraryGames: state.initialLibraryGames.map((_game: Result) =>
            _game.id === game.id ? game : _game
          ),
          libraryGames: state.libraryGames.map((_game: Result) =>
            _game.id === game.id ? game : _game
          ),
        })),
    }),
    {
      name: "library-games",
    }
  )
);

export const useLibraryStoreId = create(
  persist<libraryIdsState>(
    (set) => ({
      libraryGamesId: [],
      addLibraryGameId: (id: number) =>
        set((state) => ({
          libraryGamesId: [...state.libraryGamesId, id],
        })),
      removeLibraryGameId: (id: number) =>
        set((state) => ({
          libraryGamesId: state.libraryGamesId.filter(
            (gameId) => gameId !== id
          ),
        })),
    }),
    {
      name: "library-id",
    }
  )
);
