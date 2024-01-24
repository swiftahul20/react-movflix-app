import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "../lib/axios-instance/GETOptions";
import MoonLoader from "react-spinners/MoonLoader";
import { ArrowNext, ArrowPrev } from "../Arrow";

import UpcomingDetails from "./UpcomingDetails";

const Upcoming = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const res = await axios(url);
        setMovies(res.data.results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieList();
  }, []);

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
                <UpcomingDetails movie={movie} />
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
