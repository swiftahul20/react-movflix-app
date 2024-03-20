import React from "react";
import "./SlideButton.scss";
import { ArrowDown } from "../../assets/icons/Icons";

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <ArrowDown />
    </span>
  </button>
);

export default SlideButton;
