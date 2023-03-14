import type { Platform } from "@/types/platforms";

export const filterPlatformsFn = (platforms: Platform[]) => {
  return platforms.filter(
    (platform) =>
      platform.id !== 6 &&
      platform.id !== 9 &&
      platform.id !== 10 &&
      platform.id !== 11 &&
      platform.id !== 12 &&
      platform.id !== 13
  );
};
