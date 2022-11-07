import React from "react";
import work1img from "../../assets/rob-mulally-oacHEtIlXsA-unsplash.jpg";

const WorksMain: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="articles">
          {/* <div className="title">Works</div> */}
          <hr></hr>
          <div className="works">
            <div className="work">
              <img src={work1img} className="workimg" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, aliquam dolorum commodi adipisci ipsam officiis,
                perspiciatis voluptas fugit ab sunt modi magni? Commodi
                laudantium placeat illo nam magni soluta repudiandae!
              </p>
            </div>
            <div className="work">
              <img src={work1img} className="workimg" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, aliquam dolorum commodi adipisci ipsam officiis,
                perspiciatis voluptas fugit ab sunt modi magni? Commodi
                laudantium placeat illo nam magni soluta repudiandae!
              </p>
            </div>
            <div className="work">
              <img src={work1img} className="workimg" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, aliquam dolorum commodi adipisci ipsam officiis,
                perspiciatis voluptas fugit ab sunt modi magni? Commodi
                laudantium placeat illo nam magni soluta repudiandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksMain;
