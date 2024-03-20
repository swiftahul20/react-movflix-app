import { useEffect, useState } from "react";
import axios from "../lib/axios-instance/GETOptions";

const usePopular = () => {
  const [movies, setMovies] = useState(null);
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios(url);
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, []);

  return {
    movies,
  };
};

export default usePopular;
