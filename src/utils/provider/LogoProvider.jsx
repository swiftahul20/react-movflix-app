// DataProvider.js
import React, { useState } from 'react';
import LogoContext from '../context/LogoContext'

const LogoProvider = ({ children }) => {
  const [logos, setLogos] = useState([]);

  return (
    <LogoContext.Provider value={{ logos, setLogos }}>
      {children}
    </LogoContext.Provider>
  );
};

export default LogoProvider;
