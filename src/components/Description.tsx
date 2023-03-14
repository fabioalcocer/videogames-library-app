"use client";
import { useTitleStore } from "@/store/games";

function Description() {
  const { titleText } = useTitleStore();

  return (
    <div className="mb-4">
      <h4 className="mb-2 text-center text-4xl font-bold">
        Games for {titleText}
      </h4>
      <p className="text-center">
        Based on player counts and release date. The best and most popular{" "}
        {titleText} games.
      </p>
    </div>
  );
}

export default Description;
