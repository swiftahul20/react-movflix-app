import React from "react";
import useTopRated from "./useTopRated";
import Slider from "../NetflixSlider";

const TopRated = () => {
  const { movies } = useTopRated();

  return (
    <>
      <div className="text-xl text-white"> Top Rated Movie </div>
      <Slider>
        {movies &&
          movies.map((movie) => (
            <Slider.Item
              poster={movie.poster_path}
              key={movie.id}
              id={movie.id}
            ></Slider.Item>
          ))}
      </Slider>
    </>
  );
};

export default TopRated;
