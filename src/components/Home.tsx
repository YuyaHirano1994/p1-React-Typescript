import React from "react";

/* IMPORT CSS */
import "../css/Home.css";
import "../css/style.css";

/* components */
import Header from "./common/Header";
import Footer from "./common/Footer";

/* images */
import image from "../assets/top_cover.jpg";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Header />
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
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="info">
          <h3>+1 (236) 858 8632</h3>
          <h3>v322sk@gmail.com</h3>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
