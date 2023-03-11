"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { searchGames } from "@/api";

function SearchBar() {
  const [query, setString] = useState("");

  const getSearchGames = async (query: string) => {
    const { results } = await searchGames(query);
    console.log(results);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setString(event.currentTarget.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const queryFormated = query.toLowerCase().split(" ").join("-");
      getSearchGames(queryFormated);
    }
  };

  return (
    <div className="relative">
      <input
        onKeyUp={handleKeyPress}
        onChange={handleChange}
        value={query}
        type="search"
        name="search"
        className="peer rounded-full bg-zinc-700/60 py-2 pl-11 pr-0 text-xs font-medium text-zinc-900 transition-all duration-300 placeholder:text-neutral-400 hover:bg-zinc-100 focus:border-transparent focus:bg-zinc-100 focus:outline-none focus:ring-0 sm:w-60 sm:pr-2 sm:text-sm"
        placeholder="Search for games"
      />
      <BiSearch className="absolute top-2 left-4 fill-zinc-400 text-xl peer-focus:fill-zinc-900" />
    </div>
  );
}

export default SearchBar;
