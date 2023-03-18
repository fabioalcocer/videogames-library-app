"use client";
import GameCard from "@/components/GameCard";
import { useLibraryStore, useLibraryStoreId } from "@/store/games";

function LibraryPage() {
  const { libraryGames } = useLibraryStore();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <div>
      <section className="mt-7 flex flex-wrap justify-center gap-5 md:justify-start">
        {libraryGames.length ? (
          libraryGames?.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              inLibrary={libraryGamesId.includes(game.id)}
            />
          ))
        ) : (
          <p>No games found. Try clearing all filters.</p>
        )}
      </section>
    </div>
  );
}

export default LibraryPage;
