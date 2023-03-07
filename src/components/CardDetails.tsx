import { Result } from "@/types/games";
import { formatDate } from "@/utils/formatDate";
import { BsChevronRight } from "react-icons/bs";
import { Alert } from "flowbite-react";

type Props = {
  game: Result;
  setShow: (value: boolean) => void;
};

function CardDetails({ game, setShow }: Props) {
  const dateArray = game.released.split("-");

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col text-sm">
        <li className="flex items-center justify-between border-b border-zinc-700/60 py-3 text-neutral-500">
          <p>Release date:</p>
          <span className="text-xs text-zinc-200">{formatDate(dateArray)}</span>
        </li>
        <li className="flex items-center justify-between border-b border-zinc-700/60 py-3 text-neutral-500">
          <p>Genres:</p>
          <div className="flex gap-1">
            {game.genres.map((genre) => (
              <a
                key={genre.id}
                className="text-xs text-zinc-200 underline"
                href="#"
              >
                {genre.name}
              </a>
            ))}
          </div>
        </li>
      </ul>
      <button
        className="mx-auto mt-4 inline-block max-w-max border-b border-zinc-100/40 text-sm"
        onClick={() => setShow(true)}
      >
        View less
      </button>

      <a href="" className="rounded-md mt-4 bg-zinc-700/50 py-3 px-4 text-sm flex items-center justify-between">
        Show more like this
        <BsChevronRight className="fill-gray-500 text-xl"/>
      </a>
    </div>
  );
}

export default CardDetails;
