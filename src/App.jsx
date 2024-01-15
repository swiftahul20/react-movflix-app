import React from 'react';
import Navbar from './components/Navbar'
import Trending from './components/Trending';

import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Trending />
    </>
  )
}

export default App;
