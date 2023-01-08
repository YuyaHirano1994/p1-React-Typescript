import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../../css/style.css";

const Hamburger: React.FC = (props) => {
  return (
    <Menu {...props}>
      <a href="https://github.com/YuyaHirano1994" target="_blank" rel="noreferrer">
        Github
      </a>
      <a href="https://www.linkedin.com/in/yuya-hirano-9605a5247/" target="_blank" rel="noreferrer">
        Linkedin
      </a>
      <Link to={`/`}>Home</Link>
      <Link to={`/about/`}>About</Link>
      <Link to={`/works/`}>Works</Link>
      <Link to={`/article/`}>Articles</Link>
      <a href="http:www.google.com">Contact</a>
    </Menu>
  );
};

export default Hamburger;
