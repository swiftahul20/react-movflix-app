import React, { useEffect, useState } from "react";
import axios from "../components/lib/axios-instance/GETOptions";
import { useLocation } from "react-router-dom";
import { Starred } from "../assets/icons/Icons";

import { useDetails } from "../utils/context/MovieDetailsContext";
import { useModal } from "../utils/context/ModalContext";
import Slider from "../components/NetflixSlider";

import noImage from "../assets/image/no_image.png";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const { openModal, setOpenModal } = useModal(false);
  const { getMoviesDetails } = useDetails();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query");

  const fontStyle = {
    fontFamily: "Montserrat",
  };

  useEffect(() => {
    if (query !== "") {
      async function Search() {
        try {
          const res = await axios(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&region=us`
          );
          setMovies(res.data.results);
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

  console.log(movies);

  const handleClick = async () => {
    try {
      // await getMoviesDetails(movie.id);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-[1920px] px-24 py-28 text-white">
        <div className="mb-6"> Search result for {query ? query : "  "}</div>

        <div className="grid grid-cols-5 gap-x-2 gap-y-6">
          {movies.map((movie, i) => (
            <div
              key={i}
              className="group relative rounded-md transition delay-150 ease-in-out duration-500 hover:scale-[1.4] hover:z-10"
            >
              {/* <div
                style={fontStyle}
                className="px-2 py-4 mx-auto"
              >
                <p className="text-sm font-bold shadow-md text-balance">
                  {movie.title}
                </p>
              </div> */}
              <img
                src={
                  movie.backdrop_path
                    ? "https://image.tmdb.org/t/p/original/" +
                      movie.backdrop_path
                    : noImage
                }
                className="rounded-t-md"
              />
              <div className="h-fit bg-[#181818] py-4 px-4 rounded-b-md">
                <p className="text-sm font-bold shadow-md text-balance mb-2">
                  {movie.title}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <button className="border px-1 py-1 rounded-full mr-2 hover:bg-[#E50914] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                    <button className="group starred border px-1 py-1 rounded-full">
                      <Starred />
                    </button>
                  </div>
                  <button
                    onClick={handleClick}
                    className="group arrowDown border px-1 py-1 rounded-full hover:border-[#a8a8a8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 group-hover:stroke-[#a8a8a8]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-row gap-2 text-sm mb-2">
                  <span className="text-[#46d369] font-bold">
                    {" "}
                    {Math.round(movie.vote_average)}/10
                  </span>
                  <span> 18+ </span>
                  <span className="font-bold">
                    {" "}
                    {movie.release_date?.slice(0, 4)}{" "}
                  </span>
                  <span className="font-bold tracking-widest px-1 bg-black">
                    {" "}
                    HD{" "}
                  </span>
                </div>
                <div className="text-sm">
                  {/* {genre && <span className="sub-title"> {genre} </span>} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-x-2 gap-y-6">
          {/* <div className="animate-pulse h-[127px] p-4 bg-gray-100 rounded-md">
            <div className="relative top-12">
              <Typography
                as="div"
                variant="h1"
                className="mb-2 h-3 w-1/2 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
            </div>
          </div> */}

          {/* {movies?.map((movie) => (
            <div
              key={movie.id}
              className="relative rounded-md transition ease-in-out hover:scale-[1.3] hover:duration-500 hover:z-10"
            >
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                }
                alt={movie.title}
                className="rounded-md"
              />
              <div
                style={fontStyle}
                className="absolute bottom-0 px-2 py-4 mx-auto"
              >
                <p className="text-sm font-bold shadow-md text-balance">
                  {movie.title}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Search;
