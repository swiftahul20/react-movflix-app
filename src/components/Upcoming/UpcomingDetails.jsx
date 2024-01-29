import React, { useState, useEffect } from "react";
import axios from "../lib/axios-instance/GETOptions";
import { InfoIcon } from "../../assets/icons/Icons";
import { BtnMoreInfo } from "../Button";

const UpcomingDetails = ({ movie }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const genre_url = "https://api.themoviedb.org/3/genre/movie/list?";

  useEffect(() => {
    const getGenre = async () => {
      try {
        const res = await axios(genre_url);
        setGenres(res.data.genres);
      } catch (error) {
        setError(error.message);
      }
    };


    getGenre();
  }, []);

  const getGenreText = () => {
    const genreIds = movie.genre_ids || [];
    const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name).join(" - ");
  };

  return (
    <>
      {error && <div className="text-white text-3xl">{error}</div>}
      <div className="absolute top-40 z-10 max-w-[1280px] ">
        <div className="px-48 w-full flex flex-col gap-4 text-white drop-shadow-lg *:w-fit *:px-2 *:py-2 *:backdrop-blur-sm *:bg-black/20">
          <span className="text-xl"> Upcoming in Theaters </span>
          <span className="text-5xl"> {movie.title} </span>
          <span className="text-md">
            {" "}
            {movie.release_date.slice(0, 4)} - {movie.original_language}{" "}
          </span>
          <p className="text-xl text-pretty"> {movie.overview} </p>
          <div className="text-sm tracking-wide bg-black">
            {getGenreText()}
          </div>
        </div>
        <BtnMoreInfo id={movie.id} />
      </div>
    </>
  );
};

export default UpcomingDetails;
