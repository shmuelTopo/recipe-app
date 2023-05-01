import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<ResultsPage></ResultsPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
