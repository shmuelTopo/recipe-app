import { useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("search param has change");
    if (!searchParams.get("query")) {
      navigate("/");
    }
  }, [location]);

  return (
    <div>
      <h1>{searchParams.get("query")}</h1>
    </div>
  );
}

export default Search;
