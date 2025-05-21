import React, { useState } from "react";
import { useLoaderData } from "react-router";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  const {
    title,
    prepTime,
    likes,
    isChecked,
    instructions,
    ingredients,
    image,
    cuisine,
  } = recipe;
  const [islikes, setIsLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return <div>Recipe details page</div>;
};

export default RecipeDetails;
