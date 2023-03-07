import { GrMenu } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between px-6 py-5 text-zinc-100">
      <h1 className="text-lg font-extrabold tracking-[6px]">VLFA</h1>

      <div className="relative">
        <input
          type="search"
          name="search"
          className="peer rounded-full bg-zinc-700/60 py-2 pl-11 pr-8 text-sm font-medium text-zinc-900 transition-all duration-300 placeholder:text-neutral-400 hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
          placeholder="Search for games"
        />
        <BiSearch className="absolute top-2 left-4 fill-zinc-400 text-xl peer-focus:fill-zinc-900" />
      </div>
      <GrMenu className="text-2xl invert" />
    </header>
  );
}

export default Header;
