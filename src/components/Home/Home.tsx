import React from "react";
import "./Home.css";
import TopMain from "./TopMain";
import TopCovers from "./TopCovers";
import Navbar from "../common/Navbar";
import Links from "../common/Links";

const Home: React.FC = () => {
  return (
    <main className="Wrapper">
      <Navbar />
      <TopMain />
      <TopCovers />
      <Links />
    </main>
  );
};

export default Home;
