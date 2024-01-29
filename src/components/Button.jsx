import React, { useState, useEffect, useContext } from "react";
import axios from "../components/lib/axios-instance/GETOptions";
import { InfoIcon } from "../assets/icons/Icons";
import { useModal } from "../utils/context/ModalContext";
import ClipLoader from "react-spinners/ClipLoader";

import DetailsContext from "../utils/context/MovieDetailsContext";
import CreditsContext from "../utils/context/CreditsContext";
import LogoContext from "../utils/context/LogoContext";


export const BtnMoreInfo = ({ id }) => {
  const { openModal, setOpenModal } = useModal(false);
  const [loading, setLoading] = useState(false);
  const details_uri = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`
  const logo_uri = `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`

  // const tes_uri = `https://api.themoviedb.org/3/movie/${id}?append_to_response=images%2C%20videos&language=en-US`

  const { setDetails } = useContext(DetailsContext);
  const { setCredits } = useContext(CreditsContext);
  const { setLogos } = useContext(LogoContext);



  const handleMovieClick = () => {
    setLoading(true);
    getMoviesDetails();
  };

  const getMoviesDetails = async () => {
    Promise.all([axios.get(details_uri), axios.get(logo_uri)])
      .then(([details, logos]) => {
        console.log("details:", details.data);
        console.log("cast:", details.data.credits.cast);
        setOpenModal(true)
        setDetails(details.data)
        setCredits(details.data.credits.cast)
        setLogos(logos.data.logos)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        onClick={() => handleMovieClick(id)}
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
