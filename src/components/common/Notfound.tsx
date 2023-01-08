import React from "react";
import "../../css//style.css";
import "../../css/Notfound.css";
import Header from "./Header";
import Footer from "./Footer";

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
