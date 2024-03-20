import { useEffect, useState } from "react";
import { useModal } from "../../utils/context/ModalContext";
import { useDetails } from "../../utils/context/MovieDetailsContext";
import { useLocation } from "react-router-dom";
import axios from "../lib/axios-instance/GETOptions";

const useSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setOpenModal } = useModal(false);
  const { getMoviesDetails } = useDetails();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query");

  const fontStyle = {
    fontFamily: "Montserrat",
  };

  useEffect(() => {
    if (query !== "") {
      setLoading(true);
      async function Search() {
        try {
          const res = await axios(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&region=us`,
          );
          setMovies(res.data.results);
          setLoading(false);
          console.log(res.data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      Search();
    } else {
      setMovies(null);
    }
  }, [query]);

  const handleClick = async (id) => {
    console.log(id);
    try {
      await getMoviesDetails(id);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    loading,
    search,
    query,
    queryParams,
    fontStyle,
    handleClick,
  };
};

export default useSearch;
