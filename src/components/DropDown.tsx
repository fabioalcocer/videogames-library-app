"use client";
import { useTitleStore } from "@/store/games";
import type { Platform } from "@/types/platforms";
import { filterPlatformsFn } from "@/utils/filterPlatforms";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

type Props = {
  platforms: Platform[];
};

function DropDown({ platforms }: Props) {
  const filterPlatforms: Platform[] = filterPlatformsFn(platforms);
  const playStationPlatforms = filterPlatforms[1]?.platforms?.slice(0, 4);
  const setTitle = useTitleStore((state) => state.setTitle);

  const handleClickPlatform = (platform: Platform) => {
    setTitle(platform.name as string);
  };

  return (
    <div className="w-fit">
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
          <Link key={platform.id} href={`/${platform.slug}`}>
            {platform.name === "PlayStation" ? (
              <>
                <Dropdown.Item className="peer relative justify-center">
                  <p>{platform.name}</p>
                  <AiOutlineRight className="absolute right-2" />
                </Dropdown.Item>
                <div className="absolute left-32 top-20 z-30 hidden w-max justify-center rounded-md bg-white shadow-md hover:block peer-hover:block">
                  {playStationPlatforms?.map((playPlatform) => (
                    <Link key={playPlatform.id} href={`/${playPlatform.slug}`}>
                      <Dropdown.Item
                        className=""
                        onClick={() => handleClickPlatform(playPlatform)}
                      >
                        <p>{playPlatform.name} </p>
                      </Dropdown.Item>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Dropdown.Item
                className="justify-center text-center"
                onClick={() => handleClickPlatform(platform)}
              >
                {platform.name}
              </Dropdown.Item>
            )}
          </Link>
        ))}
      </Dropdown>
    </div>
  );
}

export default DropDown;
