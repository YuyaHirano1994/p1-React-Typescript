import React from "react";
import "./Works.css";
import WorksMain from "./WorksMain";
import Navbar from "../common/Navbar";
import Links from "../common/Links";

const Home: React.FC = () => {
  return (
    <main className="Wrapper">
      <Navbar />
      <WorksMain />
      <Links />
    </main>
  );
};

export default Home;
