import { create } from "zustand";

type pageState = {
  currentPage: number;
  setPage: (page: number) => void;
};

export const usePageStore = create<pageState>((set) => ({
  currentPage: 1,
  setPage: (page: number) =>
    set((state) => ({
      currentPage: page + 1,
    })),
}));
