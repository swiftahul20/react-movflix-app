import React from "react";
import Slider from "../components/NetflixSlider";
import TopRated from "../components/TopRated/TopRated";
import Popular from "../components/Popular/Popular";

const Movie = () => {
  return (
    <div className="max-w-[1920px] px-24 py-28 text-white">
      <Popular />
      <TopRated />
    </div>
  );
};

export default Movie;
