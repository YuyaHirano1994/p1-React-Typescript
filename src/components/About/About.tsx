import React from "react";
import "../Home/Home.css";
import "./About.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import AboutMain from "./AboutMain";
import AboutCovers from "./AboutCovers";

const App: React.FC = () => {
  return (
    <main className="Wrapper">
      <Header />
      <AboutCovers />
      <AboutMain />
      <Footer />
    </main>
  );
};

export default App;
