"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useGameStore } from "@/store/games";
import { useSetSearchData } from "@/hooks/useGames";
import debounce from "@/utils/debounce";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { data } = useSetSearchData(query);
  const setGames = useGameStore((state) => state.setGames);

  const handleChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    500
  );

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const queryFormated = query.toLowerCase().split(" ").join("-");
      setQuery(queryFormated);

      if (data) {
        setGames(data);
      }
    }
  };

  return (
    <div className="relative flex-1">
      <input
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        type="search"
        name="search"
        className="peer rounded-full border-none bg-zinc-700/60 py-2 pl-11 pr-0 text-xs font-medium text-white transition-all duration-300 placeholder:text-neutral-400 hover:bg-zinc-100 hover:text-zinc-900 focus:border-transparent focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none focus:ring-0 sm:w-60 sm:pr-2 sm:text-sm md:py-3 md:w-full"
        placeholder="Search 884,902 games"
      />
      <BiSearch className="absolute top-2 left-4 fill-zinc-400 text-xl peer-focus:fill-zinc-900 md:top-3" />
      {/* <p>{data && JSON.stringify(data[0].name)}</p> */}
    </div>
  );
}

export default SearchBar;
