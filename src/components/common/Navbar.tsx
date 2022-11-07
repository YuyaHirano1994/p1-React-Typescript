import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu-list">
        <li id="Home">
          <Link to={`/`}>Home</Link>
        </li>
        <li id="About">
          <Link to={`/about/`}>About</Link>
        </li>
        <li id="works">
          <Link to={`/works/`}>Works</Link>
        </li>{" "}
        <li id="article">
          <Link to={`/article/`}>Articles</Link>
        </li>
        <li id="contact">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
