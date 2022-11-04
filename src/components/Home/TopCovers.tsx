import React from "react";
import top_cover from "../../assets/top_cover.jpg";
import Links from "../common/Links";

const TopCovers: React.FC = () => {
  return (
    <>
      {/* <div className="top-pic"> */}
      <img className="top-cover" src={top_cover} alt="read error" />
      {/* </div> */}
    </>
  );
};

export default TopCovers;
