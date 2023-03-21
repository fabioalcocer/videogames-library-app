"use client";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { FiMoreHorizontal } from "react-icons/fi";
import { useTitleStore } from "@/store/games";

import SearchBar from "./SearchBar";
import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [open, setOpen] = useState(false);
  const setTitle = useTitleStore((state) => state.setTitle);

  return (
    <header className="relative flex w-full items-center justify-between px-6 py-5 text-zinc-100 md:justify-start md:px-10 md:py-8">
      <Link href="/" onClick={() => setTitle("New and trending")}>
        <h1 className="mr-2 text-lg font-extrabold tracking-[6px] lg:mr-8">
          VLFA
        </h1>
      </Link>
      <SearchBar />
      <nav className="ml-8 hidden min-w-max lg:block">
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
      <GrMenu
        className="text-2xl invert lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && <Menu setOpen={setOpen} />}
    </header>
  );
}

export default Header;
