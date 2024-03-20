import React from "react";
import noImage from "../../assets/image/no_image.png";
import {
  HeadSkeleton,
  ImageSkeleton,
  ParaSkeleton,
} from "../../components/Skeleton";
import { Tooltip } from "@material-tailwind/react";
import useSearch from "./useSearch";
import { Starred } from "../../assets/icons/Icons";

const Search = () => {
  const { movies, loading, query, handleClick, fontStyle } = useSearch();
  return (
    <>
      <div className="max-w-[1920px] px-24 py-28 text-white">
        <div className="mb-6">
          {" "}
          Search result for{" "}
          <strong className="text-2xl">{query ? query : "  "} </strong>
        </div>
        <div className="grid grid-cols-5 gap-x-2 gap-y-6">
          {!loading ? (
            <>
              {movies.map((movie, i) => (
                <div
                  key={i}
                  className="group relative max-h-[278px] rounded-md transition delay-150 duration-500 ease-in-out hover:z-10 hover:scale-[1.4]"
                >
                  <img
                    src={
                      movie.backdrop_path
                        ? "https://image.tmdb.org/t/p/original/" +
                          movie.backdrop_path
                        : noImage
                    }
                    className="rounded-t-md"
                  />
                  <div className="h-fit rounded-b-md bg-[#181818] px-4 py-4">
                    <Tooltip content={movie.title}>
                      <p
                        className="hover: mb-2 line-clamp-1 text-balance text-sm font-bold shadow-md"
                        style={fontStyle}
                      >
                        {movie.title}
                      </p>
                    </Tooltip>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <button className="mr-2 rounded-full border px-1 py-1 hover:bg-[#E50914] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                        <button className="starred group rounded-full border px-1 py-1">
                          <Starred />
                        </button>
                      </div>
                      <button
                        onClick={(e) => handleClick(movie.id, e)}
                        id={movie.id}
                        className="arrowDown group rounded-full border px-1 py-1 hover:border-[#a8a8a8]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4 group-hover:stroke-[#a8a8a8]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mb-2 flex flex-row gap-2 text-sm">
                      <span className="font-bold text-[#46d369]">
                        {" "}
                        {Math.round(movie.vote_average)}/10
                      </span>
                      <span> 18+ </span>
                      <span className="font-bold">
                        {" "}
                        {movie.release_date?.slice(0, 4)}{" "}
                      </span>
                      <span className="bg-black px-1 font-bold tracking-widest">
                        {" "}
                        HD{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="h-[255px] animate-pulse rounded-b-md bg-[#181818] px-4 py-4">
              <ImageSkeleton />
              <HeadSkeleton />
              <ParaSkeleton />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
