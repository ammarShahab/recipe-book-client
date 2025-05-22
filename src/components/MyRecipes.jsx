import React from "react";
import { useLoaderData } from "react-router";

const MyRecipes = () => {
  const myrecipes = useLoaderData();
  console.log(myrecipes);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="grid gap-4 grid-cols-2 max-w-4xl mx-auto max-[600px]:grid-cols-1">
        {myrecipes.map((myrecipe) => (
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
            <img
              src={myrecipe.image}
              alt="Fluffy Pancakes"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {myrecipe.title}
              </h2>
              <div className="flex justify-between text-gray-600 text-sm mb-3">
                {/* <span>Cuisine: Others</span> */}
                <span>Preparation Time: {myrecipe.prepTime} min</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {myrecipe.isChecked.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Ingredients
                </h3>
                <ul className="list-disc pl-5 text-gray-600 text-sm">
                  {myrecipe.ingredients}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  Instructions
                </h3>
                <p className="text-gray-600 text-sm">{myrecipe.instructions}</p>
              </div>
              <div className="flex gap-3 mb-3">
                <button
                  // onClick={updateRecipe}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                >
                  Update
                </button>
                <button
                  // onClick={deleteRecipe}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                >
                  Delete
                </button>
              </div>
              <div className="text-gray-600 text-sm">
                Likes: {myrecipe.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
