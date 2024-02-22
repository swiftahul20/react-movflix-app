import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "./App.css";

import Layout from "./components/Layout";
import MyList from "./pages/MyList";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="movie" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
