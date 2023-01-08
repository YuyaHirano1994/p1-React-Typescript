import React from "react";

/* IMPORT CSS */
import "../css/style.css";
import "../css/Works.css";

/* components */
import Header from "./common/Header";
import Footer from "./common/Footer";

/* images */
import work1img from "../assets/rob-mulally-oacHEtIlXsA-unsplash.jpg";

const Home: React.FC = () => {
  return (
    <main className="Wrapper">
      <Header />
      <div className="work-content">
        <div className="work-title">
          <h1>Things I have been working on</h1>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" alt="work" />
            <div className="detail">
              <div className="work-text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam dolorum commodi adipisci
                  ipsam officiis, perspiciatis voluptas fugit ab sunt modi magni? Commodi laudantium placeat illo nam
                  magni soluta repudiandae!
                </h3>
                <h5 className="stacks">react typescript nextjs tailwindcss</h5>
              </div>
              <div className="work-links">
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VIEW CODE
                </a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" alt="" />
            <div className="detail">
              <div className="work-text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam dolorum commodi adipisci
                  ipsam officiis, perspiciatis voluptas fugit ab sunt modi magni? Commodi laudantium placeat illo nam
                  magni soluta repudiandae!
                </h3>
                <h5 className="stacks">react typescript nextjs tailwindcss</h5>
              </div>
              <div className="work-links">
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VIEW CODE
                </a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" alt="works" />
            <div className="detail">
              <div className="work-text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam dolorum commodi adipisci
                  ipsam officiis, perspiciatis voluptas fugit ab sunt modi magni? Commodi laudantium placeat illo nam
                  magni soluta repudiandae!
                </h3>
                <h5 className="stacks">react typescript nextjs tailwindcss</h5>
              </div>
              <div className="work-links">
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VIEW CODE
                </a>{" "}
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" alt="work" />
            <div className="detail">
              <div className="work-text">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam dolorum commodi adipisci
                  ipsam officiis, perspiciatis voluptas fugit ab sunt modi magni? Commodi laudantium placeat illo nam
                  magni soluta repudiandae!
                </h3>
                <h5 className="stacks">react typescript nextjs tailwindcss</h5>
              </div>
              <div className="work-links">
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VIEW CODE
                </a>
                <a href="http://www.google.com" target="_blank" rel="noreferrer">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
