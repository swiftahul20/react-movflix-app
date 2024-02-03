import React, { createContext, useContext, useState } from "react";
import axios from "../../components/lib/axios-instance/GETOptions";
// import { useModal } from "./ModalContext";

const DetailsContext = createContext();

export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState({});
  const [logos, setLogos] = useState([]);
  const [videos, setVideos] = useState([]);

  const getMoviesDetails = async (id) => {
    Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits%2C%20content_ratings&language=en-US`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
      ),
    ])
      .then(([details, logos, videos]) => {
        setDetails(details.data);
        setCredits(details.data.credits.cast);
        setLogos(logos.data.logos);
        setVideos(videos.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DetailsContext.Provider
      value={{ details, credits, logos, videos, getMoviesDetails }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = () => {
  return useContext(DetailsContext);
};

export default DetailsContext;
