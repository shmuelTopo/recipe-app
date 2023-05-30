import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<ResultsPage />} />
        <Route path="recipe" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
