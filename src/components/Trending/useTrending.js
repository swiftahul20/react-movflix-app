import { useEffect, useState } from "react";
import axios from "../lib/axios-instance/GETOptions";

const useTrending = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await axios(url);
        setmovies(res.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return {
    movies,
    loading,
  };
};

export default useTrending;
