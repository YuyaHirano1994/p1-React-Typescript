import React from "react";
import "../../css/style.css";
import "../../css/Works.css";
import WorksMain from "./WorksMain";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home: React.FC = () => {
  return (
    <main className="Wrapper">
      <Header />
      <WorksMain />
      <Footer />
    </main>
  );
};

export default Home;
