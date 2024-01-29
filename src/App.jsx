import React from "react";
import Navbar from "./components/Navbar";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";

import Trending from "./components/Trending/Trending";
import { ModalProvider } from "./utils/context/ModalContext";
import ModalDetails from "./components/ModalDetails/ModalDetails";
import MovieDetailsProvider from "./utils/provider/MovieDetailsProvider";
import CreditsProvider from "./utils/provider/CreditsProvider";
import LogoProvider from "./utils/provider/LogoProvider";

function App() {
  return (
    <>
      <MovieDetailsProvider>
        <CreditsProvider>
          <LogoProvider>
            <ModalProvider>
              <Navbar />
              <Trending />
              <ModalDetails />
            </ModalProvider>
          </LogoProvider>
        </CreditsProvider>
      </MovieDetailsProvider>
    </>
  );
}

export default App;
