import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Recipe } from "../../types/recipes";
import { changeImageDimensions } from "../../utils/url";
import "./RecipePage.css";
import React from "react";
import NutritionFacts from "../../components/NutritionFacts/NutritionFacts";

const RecipePage: React.FC = () => {
  let [searchParams] = useSearchParams();
  const { data: recipe, isLoading } = useFetch<Recipe>(
    `https://api.shmuel.dev/recipes/recipe/${searchParams.get("id")}`
  );

  if (!recipe || isLoading) {
    return <h3>Loading Recipe {searchParams.get("id")}</h3>;
  }

  return (
    <section className="recipe-page">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img
        className="recipe-image"
        src={changeImageDimensions(recipe.image, "xxl")}
        alt="recipe"
      />
      <div
        className="recipe-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></div>
      <div className="recipe-details">
        <div className="recipe-info">
          <div className="recipe-info-item">
            <span className="info-label">Servings:</span>
            <span className="info-value">{recipe.servings}</span>
          </div>
          <div className="recipe-info-item">
            <span className="info-label">Prep Time:</span>
            <span className="info-value">{recipe.readyInMinutes} minutes</span>
          </div>
          <div className="recipe-info-item">
            <span className="info-label">Likes:</span>
            <span className="info-value">{recipe.likes}</span>
          </div>
          <div className="recipe-info-item">
            <span className="info-label">Dish Types:</span>
            <span className="info-value">{recipe.dishTypes.join(", ")}</span>
          </div>
        </div>
        <div className="recipe-source">
          <span className="source-label">Source:</span>
          <a className="source-url" href={recipe.sourceUrl}>
            {recipe.sourceName}
          </a>
        </div>
      </div>
      <div className="recipe-bottom-info">
        <div className="making-recipe">
          <h3 className="section-title">Ingredients</h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((i) => (
              <li key={i.name}>{`${
                Math.round(i.amount * recipe.servings * 10) / 10
              } ${i.unit} ${i.name}`}</li>
            ))}
          </ul>
          <h3 className="section-title">Steps</h3>
          <ol className="steps-list">
            {recipe.instructions.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ol>
        </div>
        <div className="nutrition-facts">
          <NutritionFacts nutrients={recipe.nutrients}></NutritionFacts>
        </div>
      </div>
    </section>
  );
};

export default RecipePage;
