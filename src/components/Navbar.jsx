import SearchBar from "./SearchBar";
import SwapThemes from "./SwapThemes";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {

  return (
    <nav>
      <div className="nav-items layout">
        <SwapThemes />
        <h1 className="flex-1 mx-4">
          <Link href="/" className="normal-case text-xl">
            Recipe App
          </Link>
        </h1>
        <div className="flex-none gap-2">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
