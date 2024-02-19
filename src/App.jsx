import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Trending from "./components/Trending/Trending";
import ModalDetails from "./components/ModalDetails/ModalDetails";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";

import { ModalProvider } from "./utils/context/ModalContext";
import { DetailsProvider } from "./utils/context/MovieDetailsContext";
import Layout from "./components/Layout";
import MyList from "./pages/MyList";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    // <>
    //   <DetailsProvider>
    //     <ModalProvider>
    //       <Navbar />
    //       <MyList />
    //       <Trending />
    //       <ModalDetails />
    //     </ModalProvider>
    //   </DetailsProvider>
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="movie" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
