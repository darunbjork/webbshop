import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-links">
      <Link to={"/"}>Home</Link>
      <Link to={"/Products"}>Products</Link>
    </div>
  );
};

export default Navbar;
