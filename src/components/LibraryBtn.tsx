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
    <button
      className="peer flex items-center rounded-md bg-zinc-700 py-[3px] px-[6px] text-[12px] font-normal transition-all duration-300 hover:bg-zinc-50 hover:text-black"
      onClick={() => toggleGameLibrary(game)}
    >
      <FaPlus className="mr-1 text-sm font-bold" />
      {game.added}
      <LibraryDropdown />
    </button>
  );
}

export default LibraryBtn;
