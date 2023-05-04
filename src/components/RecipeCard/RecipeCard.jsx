import { Link } from "react-router-dom";
import tempImg from "../../images/placeholder-image.webp";
import Clock from "./Clock.jsx";
import Like from "./Like.jsx";
import FallbackImage from "../FallbackImage/FallbackImage";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <Link to={`/recipe?id=${recipe.id}`} state={recipe}>
      <section className="recipe-card">
        <div className="image-container">
          <FallbackImage
            stackOfImages={[
              { src: recipe.image, alt: recipe.title },
              { src: tempImg, alt: recipe.title },
            ]}
          />
        </div>
        <div className="recipe-info">
            <p className="recipe-tag">{recipe && recipe.dishTypes[0]}</p>
            <p className="title">{recipe.title}</p>

          <div className="recipe-card-footer">
            <div>
              <Clock height="16px" />
              <span>{recipe.readyInMinutes} minutes</span>
            </div>
            <div>
              <span> {recipe.likes}</span>
              <Like height="16px" />
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
