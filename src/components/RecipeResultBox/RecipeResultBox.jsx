import { Link } from "react-router-dom";
import tempImg from "../../images/image-placeholder.jpg";
import FallbackImage from "../FallbackImage/FallbackImage";
import "./RecipeResultBox.css";


export default function RecipeResultBox({ recipe }) {

  return (
    <Link to={`/recipe/${recipe.id}`} state={recipe}>
      <section className="recipe-box">
        <div className="image-container">
          <FallbackImage
            stackOfImages={[
              { src: recipe.image, alt: recipe.title },
              { src: tempImg, alt: recipe.title },
            ]}
          />
        </div>
        <p className="title">{recipe.title}</p>
        <div className="recipe-info">
          <hr className="vertical-separator" />
          <div className="calories-info">
            <p className="important">
              {Math.round(recipe.nutrients.nutritionFacts.Calories.amount)}
            </p>
            <p> CALORIES</p>
            <div className="horizontal-separator" />
            <p className="important">{recipe.numOfIngredients}</p>
            <p>INGREDIENTS</p>
          </div>

          <hr className="vertical-separator" />
          <p className="text-sm">{recipe.sourceName}</p>
        </div>
      </section>
    </Link>
  );
}
