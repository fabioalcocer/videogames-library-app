"use client";
import { useTitleStore } from "@/store/games";

function Description() {
  const { titleName } = useTitleStore();

  return (
    <div className="mb-4">
      <h4 className="mb-2 text-center text-4xl font-bold">{titleName}</h4>
      <p className="text-center">Based on player counts and release date</p>
    </div>
  );
}

export default Description;
