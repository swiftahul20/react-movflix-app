import React, { useState } from 'react';
import CreditsContext from '../context/CreditsContext';

const CreditsProvider = ({ children }) => {
    const [credits, setCredits] = useState({});
  
    return (
      <CreditsContext.Provider value={{ credits, setCredits }}>
        {children}
      </CreditsContext.Provider>
    );
  };
  
  export default CreditsProvider;
  