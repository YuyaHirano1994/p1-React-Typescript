import React from "react";
import "../common/style.css";
import "./Home.css";
import HomeMain from "./HomeMain";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Header />
      <HomeMain />
      <Footer />
    </main>
  );
};

export default Home;
