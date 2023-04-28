import Searchbar from "./Searchbar";
import SwapThemes from "./SwapThemes";
import { useSearchParams, useNavigate } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const search = (query) => {
    if(!query) return
    navigate(`/search?query=${query}`);
  };
  return (
    <nav>
      <SwapThemes />
      <h1 className="flex-1 mx-4">
        <a href="/" className="normal-case text-xl">
          Pcs Recipes
        </a>
      </h1>
      <div className="flex-none gap-2">
        <Searchbar callback={search} />
      </div>
    </nav>
  );
}
