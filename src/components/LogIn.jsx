import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import AuthContext from "./context/AuthContext";

const LogIn = () => {
  const user = use(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4e7e1af] py-7">
      <div className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-lg mt-10  bg-[#F2EDEA]">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Please Log In
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              //   ref={emailRef}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          {/* <p className=" text-xs text-red-400">{errorMessage}</p> */}
        </form>
        <div className="flex items-center justify-between text-sm">
          <Link
            // onClick={handlePassword}
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            // onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-2 w-full px-4 py-2 border rounded-lg hover:bg-gray-100 "
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
