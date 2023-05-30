import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Recipe } from "../../types/recipes";
import { changeImageDimensions } from "../../utils/url";
import "./RecipePage.css"
import React from "react";
import NutritionFacts from "../../components/NutritionFacts/NutritionFacts";

const RecipePage: React.FC = () => {
  let [searchParams] = useSearchParams();
  const {data: recipe, isLoading} = useFetch<Recipe>(`https://api.shmuel.dev/recipes/recipe/${searchParams.get("id")}`)
  
  if(!recipe || isLoading) {
    return <h3>Loading Recipe {searchParams.get('id')}</h3>
  }
  return (
    <section className="recipe-page">
      <h4>Partially Implemented, here is a simple mockup</h4>{" "}
      <h2>{recipe.title}</h2>
      <img
        src={changeImageDimensions(recipe.image, "xxl")}
        alt="recipe"
      ></img>
      <p className="summary" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <ul>
        <li>Servings: {recipe.servings}</li>
        <li>Prep Time: {recipe.readyInMinutes} minutes</li>
        <li>Likes: {recipe.likes}</li>
        <li>
          Source:{" "}
          <a className="source-url" href={recipe.sourceUrl}>
            {recipe.sourceName}
          </a>
        </li>
      </ul>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((i) => (
          <li key={i.name}>{`${
            Math.round(i.amount * recipe.servings * 10) / 10
          } ${i.unit} ${i.name}`}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.instructions.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ol>
    </section>
  );
};

export default RecipePage;
