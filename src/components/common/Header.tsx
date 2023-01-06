import { Link } from "react-router-dom";
import "../../css/style.css";
import Hamburger from "./Menu";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          Yuya <br></br>Hirano
        </div>
        <ul className="menu-list">
          <li className="menu-item" id="Home">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="menu-item" id="About">
            <Link to={`/about/`}>About</Link>
          </li>
          <li className="menu-item" id="works">
            <Link to={`/works/`}>Works</Link>
          </li>
          <li className="menu-item" id="article">
            <Link to={`/article/`}>Articles</Link>
          </li>
          <li className="menu-item" id="contact">
            <a href="#">Contact</a>
          </li>
        </ul>
        <Hamburger />
      </nav>
      <hr />
    </>
  );
};

export default Header;
