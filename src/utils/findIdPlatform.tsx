import { Platform } from '@/types/platforms';

export const findIdPlatform = (name: string) => {
  const platforms: Platform[] =
    [
      { id: 1, name: "PC" },
      { id: 2, name: "PlayStation" },
      { id: 3, name: "Xbox" },
      { id: 4, name: "iOS" },
      { id: 8, name: "Android" },
      { id: 5, name: "Apple Macintosh" },
      { id: 7, name: "Nintendo" },
      { id: 14, name: "Web" },
    ]

  const findPlatform = platforms.find((platform: Platform) => platform.name === name)
  
  return findPlatform?.id
};
