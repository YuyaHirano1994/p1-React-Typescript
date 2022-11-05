import React from "react";
import "../Home/Home.css";
import "./Notfound.css";
import Navbar from "../common/Navbar";
import Links from "../common/Links";

const NotFound: React.FC = () => {
  return (
    <main className="Wrapper">
      <Navbar />
      <div className="msg">404 Not found</div>
      <Links />
    </main>
  );
};

export default NotFound;
