import React from "react";
import { Outlet } from "react-router-dom";
import { DetailsProvider } from "../utils/context/MovieDetailsContext";
import { ModalProvider } from "../utils/context/ModalContext";
import ModalDetails from "./ModalDetails/ModalDetails";

const Content = () => {
  return (
    <>
      <DetailsProvider>
        <ModalProvider>
          {<Outlet />}
          <ModalDetails />
        </ModalProvider>
      </DetailsProvider>
    </>
  );
};

export default Content;
