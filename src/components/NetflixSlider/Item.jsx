import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === film.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
        >
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            alt="poster"
          />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
