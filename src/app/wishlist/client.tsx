"use client";
import GameCard from "@/components/GameCard";
import { useWishlistStore, useWishlistStoreId } from "@/store/wishlist";
import { useLibraryStoreId } from "@/store/library";


function WishlistPageClient() {
  const { wishlistGames } = useWishlistStore();
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <div>
      <section className="mt-7 grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {wishlistGames.length ? (
          wishlistGames?.map((game) => (
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

export default WishlistPageClient;
