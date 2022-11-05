import React from "react";
import "../Home/Home.css";
import "./About.css";
import Navbar from "../common/Navbar";
import Links from "../common/Links";
import AboutMain from "./AboutMain";
import AboutCovers from "./AboutCovers";

const App: React.FC = () => {
  return (
    <main className="Wrapper">
      <Navbar />
      <AboutCovers />
      <AboutMain />
      <Links />
    </main>
  );
};

export default App;
