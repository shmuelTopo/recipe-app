import "./SwapThemes.css";
import { MoonIcon } from "../images/icons";

export default function SwapThemes() {
  return (
    <button className="swap-button">
      {<MoonIcon className="swap-button" />}
    </button>
  );
}