import React from "react";
import "../../css/style.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import AboutMain from "./AboutMain";
import { Chrono } from "react-chrono";
import { timelineModel } from "../../models/model";

const About: React.FC = () => {
  return (
    <main className="about-container">
      <Header />
      <AboutMain />
      <Footer />
    </main>
  );
};

export default About;
