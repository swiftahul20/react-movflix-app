import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "./lib/axios-instance/GETOptions";
import MoonLoader from "react-spinners/MoonLoader";
import { InfoIcon } from "../assets/icons/Icons";

// API Upcoming in Theaters
const Featured = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getMovieList = async () => {
    setLoading(true);
    try {
      const res = await axios(url);
      setMovies(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="max-w-[1920px] px-24 mt-20 mb-10">
      <div className="w-full text-white">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="flex flex-row gap-4 justify-evenly">
                {!loading ? (
                  <img
                    src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                    alt="poster"
                  ></img>
                ) : (
                  <div className="px-40 py-36">
                    <MoonLoader color="#36d7b7" />
                  </div>
                )}
                <div className="flex flex-col justify-start gap-6">
                  <span className="text-3xl"> Upcoming in Theaters </span>
                  <span className="text-6xl font-bold text-white">
                    {" "}
                    {movie.original_title}{" "}
                  </span>
                  <p className="text-white"> {movie.overview} </p>
                  <button className="bg-[#6b635f] w-1/6 text-sm rounded-md text-white py-2 px-4 inline-flex items-center hover:bg-[#4b4542]">
                    <InfoIcon />
                    <span> More Info </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
