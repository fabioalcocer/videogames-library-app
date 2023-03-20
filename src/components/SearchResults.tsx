/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import type { Result } from "../types/games";

type Props = {
  data?: Result[];
};

function SearchResults({ data }: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const refSearchResults = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    !refSearchResults.current?.contains(e.target as Node)
      ? setShow(true)
      : setShow(false);
  };

  return (
    <div
      ref={refSearchResults}
      className={`${
        show ? "hidden" : "visible"
      } absolute top-10 z-50 mt-3 flex w-full flex-col gap-2 rounded-xl px-5 pb-4 bg-zinc-800 font-semibold text-zinc-50`}
    >
      <h3 className="text-xl font-bold py-2">Games</h3>

      {data?.slice(0, 4).map((game) => (
        <div key={game.id} className="flex rounded-lg items-center hover:bg-stone-900 overflow-hidden">
          <img
            src={game.background_image}
            alt="game image"
            className="h-20 w-14 object-cover"
          />
          <p className="cursor-pointer border-b border-gray-700 py-3 px-4 last:border-0">
            {game.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
