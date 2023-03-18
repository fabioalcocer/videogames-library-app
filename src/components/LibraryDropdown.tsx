"use client";
import { Dropdown } from "flowbite-react";

function LibraryDropdown() {
  return (
    <div className="w-fit peer-hover:bg-zinc-50">
      <Dropdown
        theme={{
          floating: {
            target:
              "floating border-l border-slate-100/50 ml-2 bg-neutral-700/40 bg-transparent text-sm z-50 text-left",
          },
        }}
        className="z-50 w-[262px]"
        label=""
        inline={true}
      >
        <Dropdown.Item>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base font-bold text-slate-900">
              Uncategorized ✅
            </h4>
            <p className="text-xs text-zinc-400">
              I’ll pick the category later
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base text-slate-900">Currently playing</h4>
            <p className="text-xs text-zinc-400">I play the game regulary</p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base text-slate-900">Completed</h4>
            <p className="text-xs text-zinc-400">
              I reached my goal in the game
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base text-slate-900">Played</h4>
            <p className="text-xs text-zinc-400">
              I gave up and won’t play it anymore
            </p>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <div className="flex flex-col items-start text-left">
            <h4 className="text-base text-slate-900">Not played</h4>
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
