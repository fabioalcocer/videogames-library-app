import { Result } from "@/types/games";
import PlatformIcon from "@/components/PlatformIcon";
import Image from "next/image";

type Props = {
  game: Result;
};

function GameCard({ game }: Props) {
  return (
    <div key={game.id} className="max-w-[463px] overflow-hidden rounded-xl">
      <figure className="relative">
        <Image
          src={game.background_image}
          width={600}
          height={600}
          className="max-h-[265px] bg-cover object-cover"
          alt="background image game"
        />
      </figure>
      <div className="grid gap-2 bg-zinc-800/80 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-6 items-center gap-2 py-1">
            {game.parent_platforms.map((platform) => (
              <PlatformIcon platform={platform} key={platform.platform.id} />
            ))}
          </div>
          <span className="rounded-md border-[0.5px] border-emerald-400/60 px-[6px] font-bold text-emerald-300">
            {game.metacritic}
          </span>
        </div>
        <h2 className="text-2xl font-bold">{game.name}</h2>
        <div className="flex items-center gap-1">
          <span className="rounded-md bg-zinc-700 py-[2px] px-[6px] text-xs font-medium">{`+ ${game.added}`}</span>
          <span className="bg-zinc-700 py-[2px] px-[6px] text-xs">Regalar</span>
        </div>

        <button className="mx-auto mt-2 inline-block max-w-max border-b border-zinc-100/40 text-sm">
          View more
        </button>
        <div className="hidden">
          <ul>
            <li>{game.released}</li>
            <li>
              {game.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
