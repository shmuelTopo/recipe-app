import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import tmpSearchResults from "../pizza-sample-search.json";
import NutritionFacts from "../components/NutritionFacts";
import { searchReusltsTransformer } from "../utilitis/recipesTransformer";

function Search() {
  let [searchParams] = useSearchParams();
  let [recipes, setRecipes] = useState(
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
  }, [recipes])

  return (
    <div>
      <h1>{searchParams.get("query")}</h1>
      <NutritionFacts nutrients={recipes[0].nutrients}></NutritionFacts>
    </div>
  );
}

export default Search;
