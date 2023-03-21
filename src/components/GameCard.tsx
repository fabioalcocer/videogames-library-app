/* eslint-disable @next/next/no-img-element */
"use client";
import PlatformIcon from "@/components/PlatformIcon";
import type { Result } from "@/types/games";
import { useState } from "react";
import AddWishlistBtn from "./AddWishlistBtn";
import CardDetails from "./CardDetails";
import LibraryBtn from "./LibraryBtn";

type Props = {
  game: Result;
  inWishlist?: boolean;
  inLibrary?: boolean;
};

function GameCard({ game, inWishlist, inLibrary }: Props) {
  const [show, setShow] = useState<Boolean>(true);

  return (
    <div
      key={game.id}
      className="group w-full max-w-[463px] h-auto overflow-hidden rounded-xl transition-all duration-300 md:h-max md:max-w-[382px] lg:overflow-visible lg:hover:z-10 lg:hover:scale-[1.03]"
    >
      <figure className="relative">
        <img
          src={game.background_image}
          className="h-[265px] min-w-full rounded-t-lg bg-cover object-cover md:h-[215px]"
          alt="background image game"
        />
      </figure>
      <div className="relative grid gap-2 bg-[#202020] p-4 pb-7 rounded-b-xl">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-6 items-center gap-1 py-1">
            {game.parent_platforms?.map((platform) => (
              <PlatformIcon platform={platform} key={platform.platform.id} />
            ))}
          </div>
          <span className="rounded-md border-[0.5px] border-emerald-400/60 px-[6px] font-bold text-emerald-300">
            {game.metacritic}
          </span>
        </div>
        <h2 className="text-2xl font-bold">{game.name}</h2>
        <div className="relative mt-1 flex items-center gap-1">
          <LibraryBtn
            game={game}
            inLibrary={inLibrary}
          />
          <AddWishlistBtn game={game} inWishlist={inWishlist} />
        </div>

        <div className="hidden lg:block">
          <CardDetails game={game} setShow={setShow} />
        </div>

        {show ? (
          <button
            className="mx-auto mt-2 inline-block max-w-max border-b border-zinc-100/40 text-sm lg:hidden"
            onClick={() => setShow(false)}
          >
            View more
          </button>
        ) : (
          <CardDetails game={game} setShow={setShow} />
        )}
      </div>
    </div>
  );
}

export default GameCard;
