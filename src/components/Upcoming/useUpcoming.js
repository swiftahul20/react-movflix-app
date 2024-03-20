import axios from "../lib/axios-instance/GETOptions";
import { useEffect, useState } from "react";
import { useDetails } from "../../utils/context/MovieDetailsContext";
import { useModal } from "../../utils/context/ModalContext";

const useUpcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);
  const genre_url = "https://api.themoviedb.org/3/genre/movie/list?";

  const { setOpenModal } = useModal(false);
  const { getMoviesDetails } = useDetails();
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const res = await axios(url);
        setMovies(res.data.results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieList();
  }, []);

  useEffect(() => {
    const getGenre = async () => {
      try {
        const res = await axios(genre_url);
        setGenres(res.data.genres);
      } catch (error) {
        setError(error.message);
      }
    };

    getGenre();
  }, []);

  const getGenreText = () => {
    const genreIds = movies.genre_ids || [];
    const movieGenres = genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name).join(" - ");
  };

  const handleClick = async (id) => {
    setLoading(true);
    try {
      await getMoviesDetails(id);
      setOpenModal(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    movies,
    loading,
    error,
    genres,
    getGenreText,
    handleClick,
  };
};

export default useUpcoming;
