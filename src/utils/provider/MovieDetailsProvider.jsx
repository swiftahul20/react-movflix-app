// DataProvider.js
import React, { useState } from 'react';
import DetailsContext from '../context/MovieDetailsContext';

const MovieDetailsProvider = ({ children }) => {
  const [details, setDetails] = useState([]);

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default MovieDetailsProvider;
