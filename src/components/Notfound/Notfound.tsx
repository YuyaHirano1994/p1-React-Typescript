import React from "react";
import "../Home/Home.css";
import "./Notfound.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

const NotFound: React.FC = () => {
  return (
    <main className="Wrapper">
      <Header />
      <div className="msg">404 Not found</div>
      <Footer />
    </main>
  );
};

export default NotFound;
