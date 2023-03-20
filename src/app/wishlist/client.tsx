"use client";
import GameCard from "@/components/GameCard";
import {
  useWishlistStore,
  useWishlistStoreId,
  useLibraryStoreId,
} from "@/store/games";

function WishlistPageClient() {
  const { wishlistGames } = useWishlistStore();
  const { wishlistGamesId } = useWishlistStoreId();
  const { libraryGamesId } = useLibraryStoreId();

  return (
    <div>
      <section className="mt-7 flex flex-wrap justify-center gap-5 md:justify-start">
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
