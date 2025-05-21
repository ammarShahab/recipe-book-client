import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const TopRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top-recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopRecipes(data);
      });
  }, []);

  console.log(topRecipes);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mt-10 mb-20 bg-lime-100 p-4 rounded-2xl">
      <h1 className="text-5xl font-bold mb-6 font-bitter text-center text-amber-950">
        Top
        <Typewriter
          words={[
            " Savory Secrets",
            " Tastes to Try",
            " Culinary Picks",
            " Dish Delights",
            " Recipes",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        ></Typewriter>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRecipes.map((recipe) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover bg-gray-200 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              {recipe.title}
            </h3>
            <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
            <p className="text-gray-600">Likes: {recipe.likes}</p>
            <Link to={`/recipe/${recipe._id}`}>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/allrecipes">
        <button className="block mx-auto mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition">
          See All Recipes
        </button>
      </Link>
    </div>
  );
};

export default TopRecipes;
