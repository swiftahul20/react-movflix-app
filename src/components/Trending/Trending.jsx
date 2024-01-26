import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Slider from "../NetflixSlider";
import axios from "../lib/axios-instance/GETOptions";

// API Now Playing in Theaters
const Trending = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";


  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios(url);
        setmovies(res.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <div className="px-10 mt-6">
        <div className="text-xl text-white mx-14"> Trending Now </div>
        {!loading ? (
          <>
            <Slider>
              {movies.map((movie) => (
                <Slider.Item movie={movie} key={movie.id}></Slider.Item>
              ))}
            </Slider>
          </>
        ) : (
          <div className="px-14 py-4">
            <BeatLoader color="#36d7b7" />
          </div>
        )}
      </div>
    </>
  );
};

export default Trending;
