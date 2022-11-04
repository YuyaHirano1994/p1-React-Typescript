import React from "react";
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
          <a href="#">Works</a>
        </li>{" "}
        <li id="article">
          <a href="#">Article</a>
        </li>
        <li id="contact">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
