import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-title" onClick={backHome}>
          Friend Search
        </span>
      </div>
      <div className="navbar-middle">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <Link to={"/create"}>
          <button className="nav-button">+ Add memory</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
