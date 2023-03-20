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
  const { initialLibraryGames, libraryGames } = useLibraryStore();
  const [active, setActive] = useState(TAGS[0]);

  const setLibraryGames = useLibraryStore((state) => state.setLibraryGames);

  const handleFilter = (tag: string) => {
    setLibraryGames(initialLibraryGames);
    setActive(tag);

    if (tag === TAGS[0]) return;

    const libraryGamesFiltered = initialLibraryGames.filter(
      (game: Result) => game.status === tag
    );

    setLibraryGames(libraryGamesFiltered);

    // tag !== TAGS[0]
    //   ? setLibraryGames(libraryGamesFiltered)
    //   : setLibraryGames(initialLibraryGames);
  };

  return (
    <div className="my-5">
      <ul className="flex gap-12">
        {TAGS.map((tag) => (
          <li
            key={tag}
            onClick={(e) => handleFilter(tag)}
            className={`${
              active === tag ? "border-b-2 text-zinc-50" : "text-zinc-50/40"
            } cursor-pointer pb-1 text-xl font-medium`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterTab;
