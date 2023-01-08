import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../../css/style.css";
import Hamburger from "./Menu";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          Yuya <br></br>Hirano
          <ul className="important-list">
            <li id="github">
              <a href="https://github.com/YuyaHirano1994" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:github-fill" />
              </a>
            </li>
            <li id="linkedin">
              <a href="https://www.linkedin.com/in/yuya-hirano-9605a5247/" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:linkedin-box-fill" />
              </a>
            </li>
          </ul>
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
