import React from "react";
import { InfoIcon } from "../assets/icons/Icons";

export const BtnMoreInfo = () => {
  return (
    <>
      <button
        className="bg-[#E50914] ml-48 mt-4 text-sm rounded-md text-white py-2 px-4 inline-flex items-center hover:bg-[#cc0812]"
      >
        <InfoIcon />
        <span> More Info </span>
      </button>
    </>
  );
};
