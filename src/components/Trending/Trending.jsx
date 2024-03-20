import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Slider from "../NetflixSlider";
import useTrending from "./useTrending";

// API Now Playing in Theaters
const Trending = () => {
  const { movies, loading } = useTrending();
  return (
    <>
      <div className="mt-6 px-10">
        <div className="mx-14 text-xl text-white"> Now Playing </div>
        {!loading ? (
          <>
            <Slider>
              {movies.map((movie) => (
                <Slider.Item
                  poster={movie.poster_path}
                  id={movie.id}
                  key={movie.id}
                ></Slider.Item>
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
