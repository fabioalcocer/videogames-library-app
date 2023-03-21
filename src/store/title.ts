import { create } from "zustand";

type titleState = {
  titleText: string;
  setTitle: (title: string) => void;
};

export const useTitleStore = create<titleState>((set) => ({
  titleText: "New and trending",
  setTitle: (title: string) =>
    set((state) => ({
      titleText: title,
    })),
}));