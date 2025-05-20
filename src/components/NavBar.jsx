import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import AuthContext from "./context/AuthContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut, setUser } = use(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink className="py-3" to="/">
        Home
      </NavLink>

      <NavLink className="py-3" to="/addrecipes">
        Add Recipes
      </NavLink>
      <NavLink className="py-3" to="/allrecipes">
        All Recipes
      </NavLink>
      {user && (
        <NavLink className="py-3" to="/myrecipes">
          My Recipes
        </NavLink>
      )}

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

      <div className="navbar-end space-x-4">
        {user ? (
          <>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn w-9 h-9 b-0 p-0 rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`${user ? user.photoURL : ""}`}
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <Link to="/" onClick={handleLogOut}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn btn-active btn-info bg-[#d9cab3] border-0"
            >
              Log In
            </Link>
            <Link to="/auth/register" className="btn btn-active btn-warning">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
