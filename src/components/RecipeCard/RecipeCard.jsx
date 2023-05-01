import { Link } from "react-router-dom";
import tempImg from "../../images/image-placeholder.jpg";
import FallbackImage from "../FallbackImage/FallbackImage";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
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
          <p className="text-sm">{recipe.sourceName}</p>
        </div>
      </section>
    </Link>
  );
}
