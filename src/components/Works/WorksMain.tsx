import React from "react";
import work1img from "../../assets/rob-mulally-oacHEtIlXsA-unsplash.jpg";

const WorksMain: React.FC = () => {
  return (
    <>
      <div className="work-content">
        <div className="work-title">
          <h1>Things I have been working on</h1>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" />
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
                <a href="#" target="_blank" rel="">
                  VIEW CODE
                </a>
                <a href="#" target="_blank" rel="">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" />
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
                <a href="#" target="_blank" rel="">
                  VIEW CODE
                </a>
                <a href="#" target="_blank" rel="">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" />
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
                <a href="#" target="_blank" rel="">
                  VIEW CODE
                </a>
                <a href="#" target="_blank" rel="">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <img src={work1img} className="work-image" />
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
                <a href="#" target="_blank" rel="">
                  VIEW CODE
                </a>
                <a href="#" target="_blank" rel="">
                  VISIT APP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksMain;
