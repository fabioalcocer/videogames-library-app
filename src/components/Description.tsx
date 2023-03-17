"use client";
import { useTitleStore } from "@/store/games";

function Description() {
  const { titleText } = useTitleStore();
  return (
    <div className="mb-4">
      <h4 className="mb-2 text-center text-4xl font-bold md:text-left md:text-7xl">
        {titleText}
      </h4>
      <p className="text-center md:text-left md:text-lg">
        Based on player counts and release date. The best and most popular
        games.
      </p>
    </div>
  );
}

export default Description;
