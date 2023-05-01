import { useSearchParams } from 'react-router-dom'

function RecipePage() {
  let [searchParams] = useSearchParams();

  return <h2>Recipe Page for recipe #{searchParams.get("id")}</h2>;
}

export default RecipePage;
