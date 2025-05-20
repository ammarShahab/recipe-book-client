import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const links = (
    <>
      <NavLink className="py-3" to="/">
        Home
      </NavLink>
      {/* {user && (
            <NavLink className="py-3" to="/about">
              About
            </NavLink>
          )} */}
      <NavLink className="py-3" to="/addrecipes">
        Add Recipes
      </NavLink>
      <NavLink className="py-3" to="/allrecipes">
        All Recipes
      </NavLink>
      <NavLink className="py-3" to="/myrecipes">
        My Recipes
      </NavLink>
      {/* {user && (
            <NavLink className="py-3" to="/myprofile">
              My Profile
            </NavLink>
          )} */}

      <NavLink className="py-3" to="/myprofile">
        My Profile
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#584b45] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-16" src={logo} alt="logo" />
          <a className="text-xl font-extrabold text-[#dedbda]">DishDiary</a>
        </div>
      </div>
      <div className="navbar-center menu menu-horizontal hidden sm:hidden md:hidden lg:hidden xl:block px-1 space-x-4 text-[#dedbda]">
        {links}
      </div>
      {/* <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 ">{links}</ul>
      </div> */}
      <div className="navbar-end space-x-4">
        {/* <ul className=" menu menu-horizontal hidden sm:hidden md:hidden lg:hidden xl:block px-1 space-x-4"></ul> */}
        {/* {user ? (
          <> */}
        <div className="dropdown dropdown-bottom ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-9 h-9 rounded-full overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              // src={`${user ? user.photoURL : ""}`}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Ammar Shahab</a>
            </li>
            <li>
              <Link
                to="/"
                //   onClick={handleLogOut}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>

        {/* <Link to="/myprofile" className="w-9 h-9 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            // src={`${user ? user.photoURL : ""}`}
          />
        </Link> */}

        {/* <Link
          to="/"
          //   onClick={handleLogOut}
          className="btn shadow-none bg-[#ffcc70] text-black border-0"
        >
          Log Out
        </Link> */}
        {/*  </>
        ) : ( */}
        {/* <> */}
        <Link
          to="/auth/login"
          className="btn btn-active btn-info bg-[#d9cab3] border-0"
        >
          Log In
        </Link>

        <Link to="/auth/register" className="btn btn-active btn-warning">
          Register
        </Link>
        {/* </> */}
        {/* ) */}
      </div>
    </div>
  );
};

export default NavBar;
