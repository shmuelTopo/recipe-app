import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Search from "./components/Search"

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search></Search>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
