import React, { useContext } from "react";
import ReactPlayer from "react-player/youtube";
import { useModal } from "../../utils/context/ModalContext";
import { Modal, Button } from "flowbite-react";
import { Typography } from "@material-tailwind/react";
import "./ModalDetails.scss";

import DetailsContext from "../../utils/context/MovieDetailsContext";
import { HeadSkeleton, ParaSkeleton, VideoSkeleton } from "../Skeleton";
import { Starred } from "../../assets/icons/Icons";

const ModalDetails = () => {
  const { openModal, setOpenModal } = useModal(false);
  const { details } = useContext(DetailsContext);
  const { credits } = useContext(DetailsContext);
  const { logos } = useContext(DetailsContext);
  const { videos } = useContext(DetailsContext);

  const minutes = details.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const genre =
    details.length === 0
      ? ""
      : details.genres.map((item) => item.name).join(" - ");

  const production =
    details.length === 0
      ? ""
      : details.production_companies
          .map((item) => item.name)
          .slice(0, 3)
          .join(", ");

  const logo = logos.length > 0 ? logos[0] : null;

  const trailers = videos.filter((item) => item.type === "Clip");

  const randomTrailer = Math.floor(Math.random() * trailers.length);
  const trailer = trailers[randomTrailer];

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div id="wrapper">
          <div className="modal">
            <div className="px-12 py-10">
              <div className="flex justify-center">
                {trailer ? (
                  <ReactPlayer
                    width={900}
                    height={440}
                    controls
                    url={`https://www.youtube.com/watch?v=${trailer.key}`}
                  />
                ) : (
                  <VideoSkeleton />
                )}
              </div>
              <div className="absolute top-8 right-60 cursor-auto">
                <button
                  className="px-2 py-2 border rounded-full cursor-pointer"
                  onClick={() => setOpenModal(false)}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="button"
                    aria-label="close"
                    tabIndex="0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content-first">
                <div className="flex flex-row justify-start gap-4 mb-4">
                  {details.length != 0 ? (
                    <>
                      <Button className="bg-[#E50914] border-none cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        Add to List{" "}
                      </Button>
                      <button className="group starred border px-4 rounded-full">
                        <Starred />
                      </button>
                    </>
                  ) : (
                    <div className="max-w-full animate-pulse mb-2">
                      <Button
                        disabled
                        tabIndex={-1}
                        className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                      >
                        &nbsp;
                      </Button>
                    </div>
                  )}
                </div>

                {details.length != 0 ? (
                  <>
                    <div className="modal-description">
                      <div className="description-match">
                        <span>{Math.round(details.vote_average)}/10</span>
                      </div>
                      <span>{details.release_date?.slice(0, 4)}</span>
                      <svg viewBox="0 0 100 100">
                        <path
                          id="Fill-41"
                          fill="#D7262D"
                          d="M92.06 0H7.594A7.592 7.592 0 000 7.592V92.06a7.594 7.594 0 007.594 7.594H92.06c4.199 0 7.594-3.4 7.594-7.594V7.592A7.59 7.59 0 0092.06 0"
                        ></path>
                        <path
                          id="Shape"
                          fill="#FFFEFD"
                          d="M30.596 27.01h7.828v46.465h-8.929V38.928a14.121 14.121 0 01-2.52 2.085A14.722 14.722 0 0124 42.477v-8.335c1.595-.913 2.947-1.965 4.058-3.16a12.723 12.723 0 002.538-3.972zm35.248 28.73c0-2.36-.162-3.894-.482-4.603-.32-.708-.904-1.062-1.745-1.062-.844 0-1.428.403-1.76 1.208-.333.804-.502 2.29-.502 4.457v6.373c0 2.36.161 3.895.484 4.602.32.708.914 1.062 1.778 1.062.82 0 1.397-.385 1.73-1.158.332-.772.497-2.274.497-4.506V55.74zm9.605-18.475v.483h-9.605v-.483c0-2.36-.162-3.894-.482-4.602-.32-.708-.904-1.063-1.745-1.063-.844 0-1.428.408-1.76 1.223-.333.817-.502 2.296-.502 4.442v9.302c.844-1.073 1.79-1.867 2.843-2.382 1.054-.516 2.266-.773 3.641-.773 2.659 0 4.602.821 5.833 2.462 1.23 1.642 1.843 4.265 1.843 7.871v4.956c0 5.6-.87 9.463-2.608 11.586-1.74 2.125-4.815 3.188-9.223 3.188-4.434 0-7.517-1.057-9.258-3.17-1.74-2.115-2.608-5.983-2.608-11.604V40.71c0-5.6.868-9.452 2.608-11.555C56.167 27.052 59.25 26 63.684 26c4.453 0 7.527.8 9.223 2.397 1.694 1.6 2.542 4.556 2.542 8.868z"
                        ></path>
                      </svg>
                      <span>{`${hours}h ${remainingMinutes}m`}</span>
                      <span className="description-badge">HD</span>
                    </div>
                    <p>{details.overview}</p>
                  </>
                ) : (
                  <div className="max-w-full animate-pulse mb-2">
                    <HeadSkeleton />
                    <ParaSkeleton />
                  </div>
                )}
              </div>
              {details.length != 0 ? (
                <div className="modal-content-second">
                  <div className="mb-2">
                    {logo && (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w185/" + logo.file_path
                        }
                        alt={`Image ${logo.id}`}
                      />
                    )}
                  </div>
                  <div className="cast">
                    <span className="title"> Cast: </span>
                    {Object.keys(credits).length > 0 ? (
                      <>
                        {credits.slice(0, 8).map((cast, i) => (
                          <span className="sub-title" key={i}>
                            {" "}
                            {cast.name}
                            {i === cast.name - 1 ? "" : ", "}
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className="sub-title"> - </span>
                    )}
                  </div>
                  <div className="genres">
                    <span className="title">Genres: </span>
                    <span className="sub-title">
                      {genre && <span className="sub-title"> {genre} </span>}
                    </span>
                  </div>
                  <div className="show">
                    <span className="title"> Production: </span>
                    {production && (
                      <span className="sub-title">{production + "."}</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="max-w-full animate-pulse mb-2">
                  <ParaSkeleton />
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalDetails;
