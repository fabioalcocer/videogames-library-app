import { Result } from "@/types/games";
import { formatDate } from "@/utils/formatDate";
import { BsChevronRight } from "react-icons/bs";

type Props = {
  game: Result;
  setShow: (value: boolean) => void;
};

function CardDetails({ game, setShow }: Props) {
  return (
    <div className="z-50 flex animate-fade flex-col bg-[#202020] lg:absolute lg:-bottom-[135px] lg:left-0 lg:right-0 lg:hidden lg:p-4 lg:pt-0 lg:group-hover:block rounded-b-md">
      <ul className="flex flex-col text-sm">
        <li className="flex items-center justify-between border-b border-zinc-700/60 py-3 text-neutral-500">
          <p>Release date:</p>
          <span className="text-xs text-zinc-200">
            {formatDate(game.released)}
          </span>
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
        className="mx-auto mt-4 inline-block max-w-max border-b border-zinc-100/40 text-sm lg:hidden"
        onClick={() => setShow(true)}
      >
        View less
      </button>

      <a
        href=""
        className="mt-4 flex items-center justify-between rounded-md bg-zinc-700/50 py-3 px-4 text-sm"
      >
        Show more like this
        <BsChevronRight className="fill-gray-500 text-xl" />
      </a>
    </div>
  );
}

export default CardDetails;
