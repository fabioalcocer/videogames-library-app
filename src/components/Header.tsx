import { GrMenu } from "react-icons/gr";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between px-6 py-5 text-zinc-100">
      <h1 className="text-lg font-extrabold tracking-[6px]">VLFA</h1>
      <SearchBar />
      <GrMenu className="text-2xl invert" />
    </header>
  );
}

export default Header;
