import { useLibraryStore } from "@/store/games";
import type { Result } from "@/types/games";

function FilterTab() {
  const { libraryGames } = useLibraryStore();
  const setLibraryGames = useLibraryStore((state) => state.setLibraryGames);

  const handleFilter = () => {
    const libraryGamesFiltered = libraryGames.filter(
      (game: Result) => game.status === "Uncategorized"
    );

    setLibraryGames(libraryGamesFiltered);
  };

  return (
    <div className="my-5">
      <ul className="flex gap-12">
        <li className="text-xl font-medium">All games</li>
        <li
          className="cursor-pointer text-xl font-medium text-zinc-50/40"
          onClick={handleFilter}
        >
          Uncategorized
        </li>
      </ul>
    </div>
  );
}

export default FilterTab;
