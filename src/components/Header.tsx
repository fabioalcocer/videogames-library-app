"use client";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { FiMoreHorizontal } from "react-icons/fi";
import { useTitleStore } from "@/store/games";

import SearchBar from "./SearchBar";

function Header() {
  const setTitle = useTitleStore((state) => state.setTitle);

  return (
    <header className="flex w-full items-center justify-between px-6 py-5 text-zinc-100 md:justify-start md:px-10 md:py-8">
      <Link href="/" onClick={() => setTitle("New and trending")}>
        <h1 className="text-lg font-extrabold tracking-[6px] mr-8">VLFA</h1>
      </Link>
      <SearchBar />
      <nav className="ml-8 min-w-max">
        <ul className="flex items-center gap-4 py-1 text-sm font-semibold">
          <li className="border-b-2 border-transparent py-[2px] transition-all duration-200 hover:border-b-2 hover:border-white">
            LOG IN
          </li>
          <li className="border-b-2 border-transparent py-[2px] transition-all duration-200 hover:border-b-2 hover:border-white">
            SIGN UP
          </li>
          <li className="border-b-2 border-transparent py-[2px] transition-all duration-200 hover:border-b-2 hover:border-white">
            API
          </li>
          <FiMoreHorizontal className="text-2xl font-semibold" />
        </ul>
      </nav>
      <GrMenu className="text-2xl invert md:hidden" />
    </header>
  );
}

export default Header;
