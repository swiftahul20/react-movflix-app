import React from "react";
import Slider from "../NetflixSlider";
import usePopular from "./usePopular";

const Popular = () => {
  const { movies } = usePopular();

  return (
    <>
      <div className="text-xl text-white"> Popular Movie </div>
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

export default Popular;
