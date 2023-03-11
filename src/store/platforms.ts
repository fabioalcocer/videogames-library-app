import { create } from "zustand";

type titleState = {
  titleName: string;
  setTitle: (title: string) => void;
};

export const useTitleStore = create<titleState>((set) => ({
  titleName: "New and trending",
  setTitle: (title: string) =>
    set((state) => ({
      titleName: title,
    })),
}));
