import { useLibraryStore } from "@/store/games";
import type { Result } from "@/types/games";
import { MouseEvent, useState } from "react";

const TAGS: string[] = [
  "All games",
  "Uncategorized",
  "Currently playing",
  "Completed",
  "Played",
  "Not Played",
];

function FilterTab() {
  const [active, setActive] = useState(TAGS[0]);
  const { initialLibraryGames } = useLibraryStore();
  const setLibraryGames = useLibraryStore((state) => state.setLibraryGames);

  const handleFilter = (tag: string) => {
    setLibraryGames(initialLibraryGames);
    setActive(tag);

    if (tag === TAGS[0]) return;

    const libraryGamesFiltered = initialLibraryGames.filter(
      (game: Result) => game.status === tag
    );

    setLibraryGames(libraryGamesFiltered);
  };

  return (
    <div className="my-5 max-w-full overflow-x-scroll lg:overflow-hidden">
      <ul className="flex gap-12 items-center">
        {TAGS.map((tag) => (
          <li
            key={tag}
            onClick={(e) => handleFilter(tag)}
            className={`${
              active === tag ? "border-b-2 text-zinc-50" : "text-zinc-50/40"
            } cursor-pointer pb-1 text-lg lg:text-xl font-medium min-w-max`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterTab;
