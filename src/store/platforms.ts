import { create } from "zustand";

type platformsState = {
  arrPlatform: any[];
  addPlatforms: (platforms: Record<number, string>[]) => void;
};

export const usePlatformStore = create<platformsState>((set) => ({
  arrPlatform: [],
  addPlatforms: (platforms) =>
    set((state) => ({
      arrPlatform: platforms,
    })),
}));
