"use client";
import GameCard from "@/components/GameCard";
import { useWishlistStore, useWishlistStoreId } from "@/store/games";

function WishlistPage() {
  const { wishlistGames } = useWishlistStore();
  const { wishlistGamesId } = useWishlistStoreId();

  return (
    <div>
      <section className="mt-7 flex flex-wrap justify-center gap-5 md:justify-start">
        {wishlistGames ? (
          wishlistGames?.map((game) => (
            <GameCard
              key={game.id}
              game={game}
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

export default WishlistPage;
