"use client";
import { useLibraryStore, useLibraryStoreId } from "@/store/games";
import { FaPlus } from "react-icons/fa";
import LibraryDropdown from "./LibraryDropdown";
import type { Result } from "@/types/games";

type Props = {
  game: Result;
  inLibrary?: boolean;
};

function LibraryBtn({ game, inLibrary }: Props) {
  const addLibraryGame = useLibraryStore((state) => state.addLibraryGame);
  const removeLibraryGame = useLibraryStore((state) => state.removeLibraryGame);
  const addLibraryGameId = useLibraryStoreId((state) => state.addLibraryGameId);
  const removeLibraryGameId = useLibraryStoreId(
    (state) => state.removeLibraryGameId
  );

  const toggleGameLibrary = (game: Result) => {
    if (inLibrary) {
      removeLibraryGame(game.id);
      removeLibraryGameId(game.id);
      return;
    }
    addLibraryGame(game);
    addLibraryGameId(game.id);
  };

  return (
    <div className="flex items-center overflow-hidden rounded-md bg-zinc-700">
      <button
        className={`${
          inLibrary
            ? "bg-zinc-50 text-slate-900"
            : "bg-zinc-700 text-zinc-50 hover:text-black "
        } peer flex items-center py-[3px] px-[6px] pr-2 text-[12px] font-normal transition-all duration-300 hover:bg-zinc-50`}
        onClick={() => toggleGameLibrary(game)}
      >
        <FaPlus className="mr-1 text-sm font-bold" />
        {game.added}
      </button>
      <LibraryDropdown game={game} />
    </div>
  );
}

export default LibraryBtn;
