import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import tmpSearchResults from "../pizza-sample-search.json";
import { searchReusltsTransformer } from "../utilitis/recipesTransformer";
import RecipeResultBox from "../components/RecipeResultBox/RecipeResultBox";
import "./ResultsPage.css";

function ResultsPage() {
  let [searchParams] = useSearchParams();
  let [recipes] = useState(
    searchReusltsTransformer(tmpSearchResults.pizza.results)
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("search param has change");
    if (!searchParams.get("query")) {
      navigate("/");
    }
  }, [location]);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <section className="recipes-results">
        {recipes && (
          <>
            {recipes.map((result) => {
              return <RecipeResultBox key={result.id} recipe={result} />;
            })}
          </>
        )}
      </section>
    </>
  );
}

export default ResultsPage;
