import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Result } from "@/types/games";

type gamesState = {
  gamesData: Result[] | null;
  setGames: (games: Result[]) => void;
};

type titleState = {
  titleText: string;
  setTitle: (title: string) => void;
};

type wishlistState = {
  wishlistGames: Result[];
  addWishlistGame: (game: Result) => void;
  removeWishlistGame: (id: number) => void;
};

type wishlistIdsState = {
  wishlistGamesId: number[];
  addWishlistGameId: (id: number) => void;
  removeWishlistGameId: (id: number) => void;
};

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

export const useWishlistStore = create(
  persist<wishlistState>(
    (set) => ({
      wishlistGames: [],
      addWishlistGame: (game: Result) =>
        set((state) => ({
          wishlistGames: [...state.wishlistGames, game],
        })),
      removeWishlistGame: (id: number) =>
        set((state) => ({
          wishlistGames: state.wishlistGames.filter(
            (game: Result) => game.id !== id
          ),
        })),
    }),
    {
      name: "wishlist-games",
    }
  )
);

export const useWishlistStoreId = create(
  persist<wishlistIdsState>(
    (set) => ({
      wishlistGamesId: [],
      addWishlistGameId: (id: number) =>
        set((state) => ({
          wishlistGamesId: [...state.wishlistGamesId, id],
        })),
      removeWishlistGameId: (id: number) =>
        set((state) => ({
          wishlistGamesId: state.wishlistGamesId.filter(
            (gameId) => gameId !== id
          ),
        })),
    }),
    {
      name: "wishlist-id",
    }
  )
);

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
