/* eslint-disable @next/next/no-img-element */
"use client";
import type { Result } from "../types/games";

type Props = {
  data?: Result[];
};

function SearchResults({ data }: Props) {
  return (
    <>
      {data?.length && (
        <div className="absolute top-10 -left-20 z-50 mt-3 flex min-w-[90vw] flex-col gap-2 rounded-xl bg-zinc-800 px-5 pb-4 font-semibold text-zinc-50 md:left-0 md:min-w-full">
          <h3 className="py-2 text-xl font-bold">Games</h3>

          {data?.slice(0, 4).map((game) => (
            <div
              key={game.id}
              className="flex items-center overflow-hidden rounded-lg hover:bg-stone-900"
            >
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
      )}
    </>
  );
}

export default SearchResults;
