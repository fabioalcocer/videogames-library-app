export interface Games {
  count:          number;
  next:           string;
  previous:       null;
  results:        Result[];
  user_platforms: boolean;
}

export interface Result {
  slug:               string;
  name:               string;
  playtime:           number;
  platforms:          Platform[];
  stores:             Store[];
  released:           string;
  tba:                boolean;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status:    AddedByStatus;
  metacritic:         number;
  suggestions_count:  number;
  updated:            string;
  id:                 number;
  score:              null;
  clip:               null;
  tags:               Tag[];
  esrb_rating:        EsrbRating | null;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    Color;
  dominant_color:     Color;
  short_screenshots:  ShortScreenshot[];
  parent_platforms:   Platform[];
  genres:             Genre[];
}

export interface AddedByStatus {
  yet:     number;
  owned:   number;
  beaten:  number;
  toplay:  number;
  dropped: number;
  playing: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id:      number;
  name:    Name;
  slug:    Slug;
  name_en: Name;
  name_ru: NameRu;
}

export enum Name {
  AdultsOnly = "Adults Only",
  Everyone10 = "Everyone 10+",
  Mature = "Mature",
  Teen = "Teen",
}

export enum NameRu {
  С10Лет = "С 10 лет",
  С13Лет = "С 13 лет",
  С17Лет = "С 17 лет",
  ТолькоДляВзрослых = "Только для взрослых",
}

export enum Slug {
  AdultsOnly = "adults-only",
  Everyone10Plus = "everyone-10-plus",
  Mature = "mature",
  Teen = "teen",
}

export interface Genre {
  id:   number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Genre;
}

export interface Rating {
  id:      number;
  title:   Title;
  count:   number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface Store {
  store: Genre;
}

export interface Tag {
  id:               number;
  name:             string;
  slug:             string;
  language:         Language;
  games_count:      number;
  image_background: string;
}

export enum Language {
  Eng = "eng",
  Rus = "rus",
}
