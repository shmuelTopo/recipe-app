import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

export default function RecipesSearch({callback}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(query.trim())
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="input input-bordered"
      />
    </form>
  );
}
