import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MainLogo, MobLogo } from "../../assests";
import { menus } from "../../data/menus";
import { Button } from "../buttons";
import {SlMenu} from 'react-icons/sl'
import {FaTimes} from 'react-icons/fa'

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  function toggleNav() {
    setOpenNav(!openNav);
  }

  return (
    <header className="flex items-center px-5 py-10 md:px-14 xl:px-0 ">
      <div className="flex items-center justify-between w-full max-w-[1200px] m-auto">
        {/*Logo  */}
        <div className="max-w-[14.5rem]">
          <img
            src={MobLogo}
            alt="metabnb-logo"
            className="w-full object-contain md:hidden"
          />
          <img
            src={MainLogo}
            alt="metabnb-logo"
            className="hidden w-full object-contain md:flex"
          />
        </div>

        {/* Nav menus */}

        {/* mobile menu */}
        {openNav && (
          <nav className="flex flex-col gap-10 justify-center items-center absolute z-50 min-h-scren h-full w-full left-0 top-0 lg:hidden bg-mainPurple transition">
            <div className="flex flex-col gap-4 items-center">
              {menus.map((menu, id) => {
                return (
                  <NavLink
                    to={menu.link}
                    key={id}
                    className="text-white text-lg font-normal"
                  >
                    {menu.name}
                  </NavLink>
                );
              })}
            </div>
            <Button whitebg>Connect wallet</Button>
          </nav>
        )}

        <div
          className={
            openNav
              ? "cursor-pointer rounded-[100%] h-10 w-10  flex items-center justify-center lg:hidden z-50 bg-white"
              : "cursor-pointer bg-mainPurple rounded-[100%] h-10 w-10 z-50  flex items-center justify-center lg:hidden"
          }
          onClick={toggleNav}
        >
          {openNav ? (
            <FaTimes className="text-txtPurple text-2xl" />
          ) : (
            <SlMenu className="text-white text-2xl" />
          )}
        </div>

        {/* Desktop Menu */}
        <nav className=" hidden lg:flex  justify-between items-center ">
          <div className="flex items-center justify-between gap-4">
            {menus.map((menu, id) => {
              return (
                <NavLink
                  to={menu.link}
                  key={id}
                  className="text-txtDark text-lg font-normal"
                >
                  {menu.name}
                </NavLink>
              );
            })}
          </div>
        </nav>
        <div className="hidden lg:flex">
          <Button>Connect wallet</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
