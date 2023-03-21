"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoGift } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { useTitleStore } from "@/store/games";
import { useGameStore } from "@/store/games";
import { useLibraryStore } from "../store/games";

function AsideBar() {
  const setTitle = useTitleStore((state) => state.setTitle);
  const setGames = useGameStore((state) => state.setGames);
  const { initialLibraryGames } = useLibraryStore();
  const setLibraryGames = useLibraryStore((state) => state.setLibraryGames);

  const path = usePathname();

  const handleGoHome = () => {
    setGames([]);
    setTitle("New and trending");
  };

  const handleGoLibrary = () => {
    setLibraryGames(initialLibraryGames);
    setTitle("My library");
  };

  return (
    <aside className="sticky top-0 mr-2 hidden h-96 w-full flex-col gap-5 py-6 px-5 lg:flex">
      <Link href="/" className="text-2xl font-bold" onClick={handleGoHome}>
        Home
      </Link>
      <p className="text-2xl font-bold">Reviews</p>
      <p className="text-2xl font-bold">New Releases</p>
      <div className="flex flex-col gap-3">
        <Link href="/wishlist" onClick={() => setTitle("Wishlist")}>
          {path === "/wishlist" ? (
            <div className="group flex cursor-pointer items-center gap-2 rounded-md bg-zinc-50 py-1 transition-all duration-300 hover:shadow-md hover:shadow-slate-600">
              <div className="grid w-fit place-content-center rounded-md bg-zinc-50 px-1 py-1 pr-[5px] text-xl transition-all duration-300">
                <GoGift className="h-6 w-6 fill-zinc-900 transition-all duration-300" />
              </div>
              <p className="font-bold text-zinc-900 group-hover:text-zinc-800">
                Whislist
              </p>
            </div>
          ) : (
            <div className="group flex cursor-pointer items-center gap-2 rounded-md py-1 transition-all duration-300 hover:bg-zinc-50">
              <div className="grid w-fit place-content-center rounded-md bg-zinc-700 px-1 py-1 pr-[5px] text-xl transition-all duration-300 group-hover:bg-zinc-50">
                <GoGift className="h-6 w-6 transition-all duration-300 group-hover:fill-black" />
              </div>
              <p className="text-zinc-50 group-hover:text-zinc-900">Whislist</p>
            </div>
          )}
        </Link>

        <Link href="/my-library" onClick={handleGoLibrary}>
          {path === "/my-library" ? (
            <div className="group flex cursor-pointer items-center gap-2 rounded-md bg-zinc-50 py-1 transition-all duration-300 hover:shadow-md hover:shadow-slate-600">
              <div className="grid w-fit place-content-center rounded-md bg-zinc-50 px-1 py-1 pr-[5px] text-xl transition-all duration-300">
                <BsCollection className="h-5 w-5 fill-zinc-900 transition-all duration-300" />
              </div>
              <p className="font-bold text-zinc-900 group-hover:text-zinc-800">
                My library
              </p>
            </div>
          ) : (
            <div className="group flex cursor-pointer items-center gap-2 rounded-md py-1 transition-all duration-300 hover:bg-zinc-50">
              <div className="grid w-fit place-content-center rounded-md bg-zinc-700 px-1 py-1 pr-[5px] text-xl transition-all duration-300 group-hover:bg-zinc-50">
                <BsCollection className="h-5 w-5 transition-all duration-300 group-hover:fill-black" />
              </div>
              <p className="text-zinc-50 group-hover:text-zinc-900">
                My library
              </p>
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
}

export default AsideBar;
