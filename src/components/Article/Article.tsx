import React from "react";
import "./Article.css";
import ArticleMain from "./ArticleMain";
// import ArticleCovers from "./ArticleCovers";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Article: React.FC = () => {
  return (
    <main className="container">
      <Header />
      <ArticleMain />
      <Footer />
    </main>
  );
};

export default Article;
