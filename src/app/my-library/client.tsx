"use client";
import GameCard from "@/components/GameCard";
import { useLibraryStore, useLibraryStoreId } from "@/store/library";
import { useWishlistStoreId } from "@/store/wishlist";

function LibraryPageClient() {
  const { libraryGames } = useLibraryStore();
  const { libraryGamesId } = useLibraryStoreId();
  const { wishlistGamesId } = useWishlistStoreId();

  return (
    <div>
      <section className="mt-7 grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {libraryGames.length ? (
          libraryGames?.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              inLibrary={libraryGamesId.includes(game.id)}
              inWishlist={wishlistGamesId.includes(game.id)}
            />
          ))
        ) : (
          <p>No games found. Try clearing all filters.</p>
        )}
      </section>
    </div>
  );
}

export default LibraryPageClient;
