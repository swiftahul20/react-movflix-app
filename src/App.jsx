import React from "react";
import Navbar from "./components/Navbar";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";

import Trending from "./components/Trending/Trending";
import { ModalProvider } from "./utils/context/ModalContext";
import ModalDetails from "./components/ModalDetails/ModalDetails";

import { DetailsProvider } from "./utils/context/MovieDetailsContext";

function App() {
  return (
    <>
      <DetailsProvider>
        <ModalProvider>
          <Navbar />
          <Trending />
          <ModalDetails />
        </ModalProvider>
      </DetailsProvider>
    </>
  );
}

export default App;
