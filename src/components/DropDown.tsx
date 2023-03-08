"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { Platform } from "@/types/platforms";

type Props = {
  platforms: Platform[];
};

function DropDown({ platforms }: Props) {
  const filterPlatforms = platforms.filter(
    (platform) =>
      platform.id !== 6 &&
      platform.id !== 9 &&
      platform.id !== 10 &&
      platform.id !== 11 &&
      platform.id !== 12 &&
      platform.id !== 13
  );

  return (
    <div className="">
      <Dropdown
        theme={{
          floating: {
            target:
              "floating w-36 bg-neutral-700/40 p-2 px-4 text-sm text-zinc-100 rounded-md",
          },
        }}
        className="px-5 text-center"
        label="Platforms"
        inline={true}
      >
        <Dropdown.Item className="pointer-events-none justify-center">
          <span className="block text-sm text-gray-400">Platforms</span>
        </Dropdown.Item>
        {filterPlatforms.map((platform) => (
          <Dropdown.Item
            className="justify-center text-center"
            key={platform.id}
          >
            <Link href={`/${platform.name}`}>{platform.name}</Link>
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}

export default DropDown;
