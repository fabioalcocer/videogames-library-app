"use client";
import type { Platform } from "@/types/platforms";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { useTitleStore } from "@/store/platforms";

type Props = {
  platforms: Platform[];
};

function DropDown({ platforms }: Props) {
  const setTitle = useTitleStore((state) => state.setTitle);
  const filterPlatforms = platforms.filter(
    (platform) =>
      platform.id !== 6 &&
      platform.id !== 9 &&
      platform.id !== 10 &&
      platform.id !== 11 &&
      platform.id !== 12 &&
      platform.id !== 13
  );

  const playStationPlatforms = filterPlatforms[1]?.platforms?.slice(0, 4);

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
                        onClick={() =>
                          setTitle(`Games for ${playPlatform.name}`)
                        }
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
                onClick={() => setTitle(`Games for ${platform.name}`)}
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
