import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import Like from "./Like";
import FallbackImage from "../FallbackImage/FallbackImage";
import "./RecipeCard.css";

interface RecipeCardProps {
  recipe: {
    id: string;
    image: string;
    title: string;
    dishTypes: string[];
    readyInMinutes: number;
    likes: number;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  console.log(recipe);
  return (
    <Link to={`/recipe?id=${recipe.id}`} state={recipe}>
      <section className="recipe-card">
        <div className="image-container">
          <FallbackImage
            stackOfImages={[
              { src: recipe.image, alt: recipe.title }
            ]}
          />
        </div>
        <div className="recipe-info">
          <p className="recipe-tag">{recipe && recipe.dishTypes[0]}</p>
          <p className="title">{recipe.title}</p>

          <div className="recipe-card-footer">
            <div>
              <Clock height={16} width={16} />
              <span>{recipe.readyInMinutes} minutes</span>
            </div>
            <div>
              <span> {recipe.likes}</span>
              <Like height={16} width={16}/>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default RecipeCard;
