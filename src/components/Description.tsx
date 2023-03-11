'use client'

import { useTitleStore } from "@/store/platforms";

function Description() {
  const { titleName } = useTitleStore();

  return (
    <>
      <h4 className="text-center text-4xl font-bold leading-[16px]">
        {titleName}
      </h4>
      <p className="text-center">Based on player counts and release date</p>
    </>
  );
}

export default Description;
