import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/Products"} element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
