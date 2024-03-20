import React from "react";
import Slider from "react-slick";
import MoonLoader from "react-spinners/MoonLoader";
import { ArrowNext, ArrowPrev } from "../Arrow";
import { BtnMoreInfo } from "../Button";

import useUpcoming from "./useUpcoming";

const Upcoming = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };

  const { movies, loading, getGenreText, handleClick } = useUpcoming();

  return (
    <div>
      {!loading ? (
        <>
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id}>
                <div>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      movie.backdrop_path
                    }
                    alt="backdrop"
                  ></img>
                </div>
                <div className="absolute top-40 z-10 max-w-[1280px]">
                  <div className="flex w-full flex-col gap-4 px-48 text-white drop-shadow-lg">
                    <span className="w-fit rounded-full bg-black/30 px-4 py-2 text-xl">
                      {" "}
                      ⏳ Upcoming in Theaters{" "}
                    </span>
                    <span className="text-5xl"> {movie.title} </span>
                    <span className="text-md">
                      {" "}
                      {movie.release_date.slice(0, 4)} -{" "}
                      {movie.original_language}{" "}
                    </span>
                    <p className="text-pretty text-xl"> {movie.overview} </p>
                    <div>{getGenreText()}</div>
                  </div>
                  <BtnMoreInfo
                    className="ml-2"
                    variant="btnInfoRed"
                    label="More Info"
                    onClick={handleClick}
                    id={movie.id}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <div className="flex flex-row justify-center px-40 py-36">
          <MoonLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default Upcoming;
