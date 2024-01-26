import React from "react";
import Navbar from "./components/Navbar";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";
import Trending from "./components/Trending/Trending";
import ModalProvider from "./components/ModalProvider";


function App() {
  return (
    <>
        <Navbar />
        <Trending />
    </>
  );
}

export default App;
