import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Result } from "@/types/games";

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
