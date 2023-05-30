import React, { useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import RecipeResultBox from "../../components/RecipeCard/RecipeCard";
import useFetch from "../../hooks/useFetch";
import { RecipeSearch } from "../../types/recipes";
import "./ResultsPage.css";

const ResultsPage: React.FC = () => {
  let [searchParams] = useSearchParams();
  const {
    data: recipes,
    isLoading,
  } = useFetch<RecipeSearch[]>(
    `https://api.shmuel.dev/recipes/search?query=${searchParams.get('query')}`
  );


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("search param has changed");
    if (!searchParams.get("query")) {
      navigate("/");
    }
  }, [location, navigate, searchParams]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <section className="recipes-results">
        {recipes && !isLoading && (
          <>
            {recipes.map((result) => {
              return <RecipeResultBox key={result.id} recipe={result} />;
            })}
          </>
        )}
      </section>
    </>
  );
};

export default ResultsPage;
