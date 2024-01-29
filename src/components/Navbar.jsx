import React from "react";
import Upcoming from "./Upcoming/Upcoming";

const Navbar = () => {
  return (
    <>
      <Upcoming />
      <nav className="w-full max-w-[1920px] grid grid-flow-col absolute top-0 py-6 px-24 text-white bg-transparent drop-shadow-md">
        <div className=""> Logo </div>
        <div className="col-span-2">
          <ul className="flex flex-row gap-6">
            <li> Home </li>
            <li> Movie </li>
            <li> My List </li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-row justify-end gap-6">
            <li> Search </li>
            <li> Login </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
