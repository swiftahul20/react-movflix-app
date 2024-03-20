import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";

import navigation from "./lib/navigation";

import Logo from "../assets/image/logo_full.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigateTo = useNavigate();

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    navigateTo(`/search?query=${encodeURIComponent(newQuery)}`);
  };

  return (
    <>
      <nav className="from-1% absolute top-0 z-10 grid w-full max-w-[1920px] grid-flow-col bg-gradient-to-b from-black px-24 py-6 text-[#b6b5b5] drop-shadow-md">
        <div className="flex">
          <div className="w-1/6">
            <img className="w-40 drop-shadow-md" src={Logo}></img>{" "}
          </div>
          <div className="flex w-5/6 flex-row items-center justify-between">
            <ul className="flex flex-row gap-6">
              {navigation.map((item, i) => (
                <NavLink
                  className={
                    "hover:text-black [&.active]:font-bold [&.active]:text-white"
                  }
                  key={i}
                  to={item.path}
                >
                  <li className="hover:text-[#b3b3b3]"> {item.name} </li>
                </NavLink>
              ))}
            </ul>
            <ul className="flex flex-row items-center justify-end gap-6">
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
              <li className="hover:text-[#b3b3b3]">
                <Menu placement="top-end">
                  <MenuHandler>
                    <Avatar
                      variant="circular"
                      alt="tania andrew"
                      className="cursor-pointer"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                  </MenuHandler>
                  <MenuList className="border-0 bg-[#121212]/90">
                    <MenuItem className="hover:none flex items-start">
                      <Typography variant="small" className="font-small">
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
