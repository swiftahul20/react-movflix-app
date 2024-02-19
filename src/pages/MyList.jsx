import React from "react";

const fontStyle = {
  fontFamily: "Montserrat",
};
const movies = [
  {
    id: 1,
    title: "Movie 1",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    logo: "https://image.tmdb.org/t/p/original//6tpiiM1i862oS2tjSwqmjv4dKGD.png",
  },
  {
    id: 2,
    title: "Movie 2",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 3,
    title: "Movie 3",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 4,
    title: "Movie 4",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 5,
    title: "Movie 5",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 6,
    title: "Movie 5",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 7,
    title: "Movie 5",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
  {
    id: 8,
    title: "Movie 5",
    imageUrl:
      "https://image.tmdb.org/t/p/original//bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  },
];

const MyList = () => {
  return (
    <div className="max-w-[1920px] px-24 py-28 ">
      <div className="text-white text-2xl mb-2"> My List </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative bg-gray-100 rounded-md transition ease-in-out hover:scale-125 hover:duration-500 hover:z-10"
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              
              className="w-full h-fit object-cover rounded-md"
            />
            <span className="absolute top-0 right-0 p-0.5 group-hover:block hidden" title="Remove from List">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <div
              style={fontStyle}
              className="flex-col card absolute top-14 text-white px-2 tracking-wide gap-1 group-hover:block hidden"
            >
              <div className="text-md font-bold"> Poor Things </div>
              <div className="text-xs text-[#46D369] font-bold"> 2h 40min </div>
              <div className="text-xs mt-1"> Comedy • Drama • Action </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
