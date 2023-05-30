import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SwapThemes from "../SwapThemes/SwapThemes";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const search = (query: string) => {
    if (!query) return;
    navigate(`/search?query=${query}`);
  };

  return (
    <nav>
      <div className="nav-items">
        <SwapThemes />
        <h1>
          <a href="/">
            Recipes App
          </a>
        </h1>
        <div className="flex-none gap-2">
          <SearchBar callback={search} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
