import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Hamburger: React.FC = (props) => {
  return (
    <Menu {...props}>
      <Link to={`/`}>Home</Link>

      <Link to={`/about/`}>About</Link>

      <Link to={`/works/`}>Works</Link>

      <Link to={`/article/`}>Articles</Link>

      <a href="#">Contact</a>
    </Menu>
  );
};

export default Hamburger;
