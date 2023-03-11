'use client'

import { useTitleStore } from "@/store/platforms";

function Description() {
  const { titleName } = useTitleStore();

  return (
    <div className="mb-4">
      <h4 className="text-center text-4xl font-bold mb-2">
        {titleName}
      </h4>
      <p className="text-center">Based on player counts and release date</p>
    </div>
  );
}

export default Description;
