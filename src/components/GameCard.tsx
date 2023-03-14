/* eslint-disable @next/next/no-img-element */
"use client";
import PlatformIcon from "@/components/PlatformIcon";
import { Result } from "@/types/games";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import CardDetails from "./CardDetails";

type Props = {
  game: Result;
};

function GameCard({ game }: Props) {
  const [show, setShow] = useState<Boolean>(true);

  return (
    <div key={game.id} className="max-w-[463px] overflow-hidden rounded-xl w-full">
      <figure className="relative">
        <img
          src={game.background_image}
          className="h-[265px] min-w-full bg-cover object-cover"
          alt="background image game"
        />
      </figure>
      <div className="grid gap-2 bg-zinc-800/40 p-4">
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
        <div className="mt-1 flex items-center gap-1">
          <button className="flex items-center rounded-md bg-zinc-700 py-[3px] px-[6px] text-[12px] font-normal">
            <FaPlus className="mr-1 text-sm font-bold text-zinc-50" />
            {game.added}
          </button>
          <span className="rounded-md bg-zinc-700 py-[3px] px-[6px] text-xs">
            <GoGift className="max-h-fit text-lg" />
          </span>
        </div>

        {show ? (
          <button
            className="mx-auto mt-2 inline-block max-w-max border-b border-zinc-100/40 text-sm"
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
