import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Mark from "./Mark";
import "./Item.scss";
import { BtnMoreInfo } from "../Button";
import { useModal } from "../../utils/context/ModalContext";
import { useDetails } from "../../utils/context/MovieDetailsContext";

// const Item = (props, { onClick }) => (
//   <SliderContext.Consumer>
//     {({ onSelectSlide, currentSlide, elementRef }) => {
//       const isActive = currentSlide && currentSlide.id === film.id;

//       return (
//         <>
//           <div
//             ref={elementRef}
//             className={cx("item", {
//               "item--open": isActive,
//             })}
//           >
//             <img
//               src={"https://image.tmdb.org/t/p/w500/" + props.poster}
//               alt="poster"
//             ></img>
//             {isActive && <Mark />}
//             <BtnMoreInfo
//               onClick={handleClick}
//               variant="btnInfo"
//               id={props.id}
//             />
//           </div>
//         </>
//       );
//     }}
//   </SliderContext.Consumer>
// );

const Item = (props) => {
  const [loading, setLoading] = useState(true);
  const { setOpenModal } = useModal();
  const { getMoviesDetails } = useDetails();

  const handleClick = async () => {
    setLoading(true);
    try {
      await getMoviesDetails(props.id);
      setOpenModal(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div
        // ref={elementRef}
        className={cx("item", {
          // "item--open": isActive,
        })}
      >
        <img
          src={"https://image.tmdb.org/t/p/w500/" + props.poster}
          alt="poster"
        ></img>
        {/* {isActive && <Mark />} */}
        <BtnMoreInfo onClick={handleClick} variant="btnInfo" id={props.id} />
      </div>
    </>
  );
};

export default Item;
