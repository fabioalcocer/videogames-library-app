"use client";
import { useWishlistStore, useWishlistStoreId } from "@/store/games";
import { GoGift } from "react-icons/go";
import type { Result } from "@/types/games";

type Props = {
  game: Result;
  inWishlist: boolean;
};

function AddWishlistBtn({ game, inWishlist }: Props) {
  const addWishlistGame = useWishlistStore((state) => state.addWishlistGame);
  const removeWishlistGame = useWishlistStore(
    (state) => state.removeWishlistGame
  );
  const addWishlistGameId = useWishlistStoreId(
    (state) => state.addWishlistGameId
  );
  const removeWishlistGameId = useWishlistStoreId(
    (state) => state.removeWishlistGameId
  );

  const toggleGameWishlist = (game: Result) => {
    if (inWishlist) {
      removeWishlistGame(game.id);
      removeWishlistGameId(game.id);
      return;
    }

    addWishlistGame(game);
    addWishlistGameId(game.id);
  };

  return (
    <GoGift
      onClick={() => toggleGameWishlist(game)}
      className={`${
        inWishlist
          ? "bg-emerald-500 fill-zinc-50 hover:bg-zinc-50 hover:fill-black"
          : "bg-zinc-700 hover:bg-zinc-50 hover:fill-black"
      } h-[24px] w-10 cursor-pointer rounded-md p-[2px] pr-[3px] text-xl transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100`}
    />
  );
}

export default AddWishlistBtn;
