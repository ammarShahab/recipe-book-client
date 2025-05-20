import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import MyRecipes from "./components/MyRecipes";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/allrecipes", element: <AllRecipes></AllRecipes> },
      { path: "/addrecipes", element: <AddRecipe></AddRecipe> },
      { path: "/myrecipes", element: <MyRecipes></MyRecipes> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <LogIn></LogIn> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },
]);

export default router;
