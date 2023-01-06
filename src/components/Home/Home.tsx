import React from "react";
import "../../css/Home.css";
import "../../css/style.css";
import HomeMain from "./HomeMain";
import Header from "../common/Header";
import Footer from "../common/Footer";
import AboutMain from "../About/AboutMain";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Header />
      <HomeMain />
      {/* <AboutMain /> */}
      <Footer />
    </main>
  );
};

export default Home;
