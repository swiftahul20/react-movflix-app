import React from "react";
import { NavLink } from "react-router-dom";


const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Page not found</p>
      <NavLink to="/home">
        <button className="mt-8 px-4 py-2 bg-[#E50914] text-white rounded-md hover:bg-[#e50914bb] focus:outline-none focus:ring-2 focus:ring-blue-500">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
