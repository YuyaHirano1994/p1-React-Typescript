import React from "react";
import image from "../../assets/top_cover.jpg";

const HomeMain: React.FC = () => {
  return (
    <div className="content">
      <div className="titles">
        <h1>Hello, I'm Yuya Hirano</h1>
        <h2>I am Full-stack Web developer from japan</h2>
        <h2>
          I develop web applications with <span>Typescript</span> & <span>React</span>
        </h2>
      </div>
      <img className="top-image" src={image} alt="read error" />
    </div>
  );
};

export default HomeMain;
