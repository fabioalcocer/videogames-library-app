import { useLibraryStore } from "@/store/games";
import type { Result } from "@/types/games";
import { MouseEvent } from "react";

function FilterTab() {
  const { initialLibraryGames, libraryGames } = useLibraryStore();

  const setLibraryGames = useLibraryStore((state) => state.setLibraryGames);

  const handleFilter = (e: MouseEvent<HTMLLIElement>) => {
    console.log(e.currentTarget.textContent);

    const libraryGamesFiltered = libraryGames.filter(
      (game: Result) => game.status === e.currentTarget.textContent
    );

    if (e.currentTarget.textContent !== "All games") {
      return setLibraryGames(libraryGamesFiltered);
    }

    setLibraryGames(initialLibraryGames);
  };

  return (
    <div className="my-5">
      <ul className="flex gap-12">
        <li className="text-xl font-medium" onClick={(e) => handleFilter(e)}>
          All games
        </li>
        <li
          className="cursor-pointer text-xl font-medium text-zinc-50/40"
          onClick={(e) => handleFilter(e)}
        >
          Uncategorized
        </li>
      </ul>
    </div>
  );
}

export default FilterTab;
