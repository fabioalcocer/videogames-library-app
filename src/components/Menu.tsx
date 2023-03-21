"use client";
import Link from "next/link";
import { useTitleStore } from "@/store/games";
import { useGameStore } from "@/store/games";
import { IoCloseSharp } from "react-icons/io5";

type Props = {
  setOpen: (value: boolean) => void;
};

function Menu({ setOpen }: Props) {
  const setTitle = useTitleStore((state) => state.setTitle);
  const setGames = useGameStore((state) => state.setGames);

  const handleGoHome = () => {
    setGames([]);
    setTitle("New and trending");
  };

  return (
    <div className="absolute top-4 right-2 z-50 w-[80%] animate-fade rounded-2xl bg-white p-4 pb-6 text-zinc-900">
      <IoCloseSharp
        onClick={() => setOpen(false)}
        className="absolute right-5 top-5 text-[2.5rem]"
      />
      <div className="mt-3 ml-3 flex flex-col gap-4">
        <Link href="/" className="text-2xl font-bold" onClick={handleGoHome}>
          Home
        </Link>
        <Link
          href="/wishlist"
          onClick={() => {
            setTitle("Wishlist");
            setOpen(false);
          }}
        >
          <p className="text-2xl font-bold text-zinc-900">Whislist</p>
        </Link>

        <Link
          href="/my-library"
          onClick={() => {
            setTitle("My library");
            setOpen(false);
          }}
        >
          <p className="text-2xl font-bold text-zinc-900">My library</p>
        </Link>
        <p className="text-2xl">Reviews</p>
        <p className="text-2xl">New Releases</p>
      </div>
    </div>
  );
}

export default Menu;
