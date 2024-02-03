import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { InfoIcon } from "../assets/icons/Icons";

import { useModal } from "../utils/context/ModalContext";
import { useDetails } from "../utils/context/MovieDetailsContext";

export const BtnMoreInfo = ({ movie }) => {
  const { openModal, setOpenModal } = useModal(false);
  const [loading, setLoading] = useState(false);

  const { getMoviesDetails } = useDetails();

  const handleClick = async () => {
    setLoading(true)
    try {
      await getMoviesDetails(movie.id);
      setOpenModal(true);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-[#E50914] ml-48 mt-4 text-sm rounded-md text-white py-2 px-4 inline-flex items-center hover:bg-[#cc0812]"
      >
        {!loading ? (
          <InfoIcon />
          ) : (
          <ClipLoader className="mr-2" color="#fff" size={20} />
        )}
        <span> More Info </span>
      </button>
    </>
  );
};
