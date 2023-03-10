export type Platform = {
  id: number;
  name?: string;
  slug: string;
  platforms?: PlayPlatform[];
};

export type PlayPlatform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_end: null;
  year_start: null;
};
