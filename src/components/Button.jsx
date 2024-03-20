import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { InfoIcon } from "../assets/icons/Icons";

export const BtnMoreInfo = ({ id, variant, label, onClick }) => {
  const [loading] = useState(false);

  const colorVariants = {
    btnInfoRed:
      "ml-48 mt-4 inline-flex items-center rounded-md bg-[#E50914] px-4 py-2 text-sm text-white hover:bg-[#cc0812]",
    btnInfo:
      "absolute bottom-[5%] left-[45%] cursor-pointer items-center text-white",
  };

  return (
    <>
      <button
        type="button"
        onClick={(e) => onClick(id, e)}
        className={`${colorVariants[variant]}`}
      >
        {!loading ? (
          <InfoIcon />
        ) : (
          <ClipLoader className="mr-2" color="#fff" size={20} />
        )}
        <span> {label} </span>
      </button>
    </>
  );
};
