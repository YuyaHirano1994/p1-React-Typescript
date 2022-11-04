import React from "react";

const TopMain: React.FC = () => {
  return (
    <div className="about-content">
      <div className="about-title">About Me</div>
      <div className="about-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non
        officiis, sapiente possimus quae rem earum quis nemo numquam beatae
        eaque eum, officia pariatur, maiores dolor velit minus consectetur
        consequuntur.
      </div>
      <div className="skill-title">My Skills</div>
      <div className="language-title">Languages</div>
      <div className="languages">JavaScript, TypeScript, SQL, HTML, CSS</div>
      <div className="language-title">Frameworks / Libraries</div>
      <div className="languages">
        React, Redux, Redux Toolkit, Next.js, Express, Tailwind CSS, Material UI
      </div>
      <div className="language-title">Databases</div>
      <div className="languages">
        PostgreSQL, MySQL, MongoDB, Firebase, OracleDB
      </div>
    </div>
  );
};

export default TopMain;
