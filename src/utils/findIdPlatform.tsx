import { Platform } from '@/types/platforms';

export const findIdPlatform = (slug: string) => {
  const platforms: Platform[] =
    [
      { id: 1, slug: "pc" },
      { id: 2, slug: "playstation" },
      { id: 15, slug: "playstation2" },
      { id: 16, slug: "playstation3" },
      { id: 18, slug: "playstation4" },
      { id: 187, slug: "playstation5" },
      { id: 3, slug: "xbox" },
      { id: 4, slug: "ios" },
      { id: 8, slug: "android" },
      { id: 5, slug: "mac" },
      { id: 7, slug: "nintendo" },
      { id: 14, slug: "web" },
    ]

  const findPlatform = platforms.find((platform: Platform) => platform.slug === slug)
  
  return findPlatform?.id
};
