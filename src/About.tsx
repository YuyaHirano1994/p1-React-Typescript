import React from "react";
import "./Home.css";
import "./About.css";
import Navbar from "./components/common/Navbar";
import Links from "./components/common/Links";
import AboutMain from "./components/About/AboutMain";
import AboutCovers from "./components/About/AboutCovers";

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
