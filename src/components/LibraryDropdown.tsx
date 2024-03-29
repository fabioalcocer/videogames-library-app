"use client";
import { Dropdown } from "flowbite-react";
import type { Result } from "@/types/games";
import { useLibraryStore } from "@/store/library";
import { GameStatus } from "@/types/status";

type Props = {
  game: Result;
};

function LibraryDropdown({ game }: Props) {
  const updateLibraryGame = useLibraryStore((state) => state.updateLibraryGame);

  const createStatusGame = (status: string) => {
    updateLibraryGame({
      ...game,
      status,
    });
  };

  return (
    <div className="w-fit bg-emerald-500 py-1">
      <Dropdown
        theme={{
          floating: {
            target:
              "library-floating bg-neutral-700/40 bg-transparent text-sm pr-1 z-50 text-left",
          },
        }}
        className="z-50 w-[262px] bg-zinc-50"
        label=""
        inline={true}
      >
        <Dropdown.Item
          onClick={() => createStatusGame(GameStatus.uncategorized)}
        >
          <div className="flex flex-col items-start text-left">
            {game.status === GameStatus.uncategorized || !game.status ? (
              <h4 className="text-base font-bold text-slate-900">
                Uncategorized ✅
              </h4>
            ) : (
              <h4 className="text-base text-slate-900">Uncategorized</h4>
            )}
            <p className="text-xs text-zinc-400">
              I’ll pick the category later
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => createStatusGame(GameStatus.playing)}>
          <div className="flex flex-col items-start text-left">
            {game.status === GameStatus.playing ? (
              <h4 className="text-base font-bold text-slate-900">
                Currently playing ✅
              </h4>
            ) : (
              <h4 className="text-base text-slate-900">Currently playing</h4>
            )}
            <p className="text-xs text-zinc-400">I play the game regulary</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => createStatusGame(GameStatus.completed)}>
          <div className="flex flex-col items-start text-left">
            {game.status === GameStatus.completed ? (
              <h4 className="text-base font-bold text-slate-900">
                Completed ✅
              </h4>
            ) : (
              <h4 className="text-base text-slate-900">Completed</h4>
            )}
            <p className="text-xs text-zinc-400">
              I reached my goal in the game
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => createStatusGame(GameStatus.played)}>
          <div className="flex flex-col items-start text-left">
            {game.status === GameStatus.played ? (
              <h4 className="text-base font-bold text-slate-900">Played ✅</h4>
            ) : (
              <h4 className="text-base text-slate-900">Played</h4>
            )}
            <p className="text-xs text-zinc-400">
              I gave up and won’t play it anymore
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => createStatusGame(GameStatus.notPlayed)}>
          <div className="flex flex-col items-start text-left">
            {game.status === GameStatus.notPlayed ? (
              <h4 className="text-base font-bold text-slate-900">
                Not played ✅
              </h4>
            ) : (
              <h4 className="text-base text-slate-900">Not played</h4>
            )}
            <p className="text-xs text-zinc-400">I’ll play it later</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <h4 className="text-base text-red-500">Delete from libray</h4>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default LibraryDropdown;
