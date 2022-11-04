import React from "react";
import "./Home.css";
import TopMain from "./components/Home/TopMain";
import TopCovers from "./components/Home/TopCovers";
import Navbar from "./components/common/Navbar";
import Links from "./components/common/Links";

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
