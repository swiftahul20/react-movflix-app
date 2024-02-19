import React, { useState, useEffect } from "react";
import axios from "./lib/axios-instance/GETOptions";
import { Input } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image/logo_full.png";
import navigation from "./lib/navigation";
import { MoonLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setlLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    navigateTo(`/search?query=${encodeURIComponent(newQuery)}`);
  };

  // useEffect(() => {
  //   if (searchQuery !== "") {
  //     setlLoading(true);
  //     const delayType = setTimeout(() => {
  //       axios
  //         .get(
  //           `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&region=us`
  //         )
  //         .then(function (res) {
  //           console.log(res.data.results);
  //           setDatas(res.data.results);
  //           setlLoading(false);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }, 1500);
  //     return () => clearTimeout(delayType);
  //   }
  // }, [searchQuery]);

  return (
    <>
      <nav className="w-full max-w-[1920px] grid grid-flow-col absolute top-0 z-10 py-6 px-24 bg-gradient-to-b from-black from-1% text-[#e5e5e5] drop-shadow-md">
        <div className="flex">
          <div className="w-1/6">
            <img className="drop-shadow-md w-40" src={Logo}></img>{" "}
          </div>
          <div className="w-5/6 flex flex-row justify-between items-center">
            <ul className="flex flex-row gap-6 hover:text-red">
              {navigation.map((item, i) => (
                <NavLink key={i} to={item.path}>
                  <li className="hover:text-[#b3b3b3]"> {item.name} </li>
                </NavLink>
              ))}
            </ul>
            <ul className="flex flex-row justify-end gap-6 items-center">
              <li>
                <div className="w-72">
                  <Input
                    color="white"
                    label="Search"
                    size="md"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </li>
              <li className="hover:text-[#b3b3b3]"> Login </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
