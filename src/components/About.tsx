import React from "react";

/* IMPORT CSS */
import "../css/style.css";
import "../css/About.css";

/* components */
import Header from "./common/Header";
import Footer from "./common/Footer";

/* package */
import { Chrono } from "react-chrono";
import { timelineModel } from "../models/model";

/* images */
import image from "../assets/about_main.jpg";
import image2 from "../assets/about_sub.jpg";

const About: React.FC = () => {
  const items: timelineModel[] = [
    {
      title: "May 1940",
      cardTitle: "Company",
      url: "http://google.com",
      cardSubtitle: "This is my experience about team leader",
      cardDetailedText: "using React, TypScript",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://google.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://google.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://google.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://google.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
  ];
  return (
    <main className="about-container">
      <Header />
      <div className="about-content">
        <div className="aboutMe">
          <img className="about-image" src={image} alt="read error"></img>
          <div className="about-text">
            <h1>About Me</h1>
            <h3>
              I am a full stack engineer based in Vancouver.
              <br /> I'm passionate about coming up with new services and
              <br />
              designing and developing them myself.
              <br />
              <br />
              <br /> I have 6 years of experience working as a system engineer in Japan and
              <br />
              have knowledge of databases and design.
              <br /> I learned programming in Canada and am passionate about
              <br />
              developing web applications designed by myself and with my team.
              <br />
            </h3>
          </div>
        </div>
        <div className="skills">
          <div className="categories">
            <h2 className="mySkills">My Skills</h2>
            <h2 className="language category">Languages</h2>
            <p className="languages">JavaScript, TypeScript, Java, SQL, HTML, CSS</p>
            <h2 className="framework category">Frameworks / Libraries</h2>
            <p className="frameworks">React, React Native, Next.js, Express, Tailwind CSS, Material UI</p>
            <h2 className="database category">Databases</h2>
            <p className="databases">PostgreSQL, MySQL, MongoDB, Firebase, OracleDB</p>
            <h2 className="others category">Others</h2>
            <p className="other">
              AWS Lambda, AWS API Gateway, Firebase, Heroku, Git, GitHub, GitHub Actions, Bitbucket
            </p>
          </div>
          <img className="sub-image" src={image2} alt="read error"></img>
        </div>
        <div className="chrono-area">
          <div className="experience">
            <h1>My Career and Experience</h1>
          </div>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "black",
              secondary: "pink",
              cardBgColor: "dimgray",
              cardForeColor: "black",
              titleColor: "white",
              titleColorActive: "black",
            }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
