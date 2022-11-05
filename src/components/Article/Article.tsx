import React from "react";
import "./Article.css";
import ArticleMain from "./ArticleMain";
// import ArticleCovers from "./ArticleCovers";
import Navbar from "../common/Navbar";
import Links from "../common/Links";

const Home: React.FC = () => {
  return (
    <main className="Wrapper">
      <Navbar />
      <ArticleMain />
      <Links />
    </main>
  );
};

export default Home;
