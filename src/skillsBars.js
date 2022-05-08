import React, { useEffect, useState } from "react";
import "./skillsBars.css";
import Aos from "aos";
import "aos/dist/aos.css";
import SkillBar from "react-skillbars";
function SkillsBars() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const colors = {
    bar: "rgba(4, 47, 65, 0.6)",
    title: {
      text: {
        hue: 95,
        saturation: {
          minimum: 30,
          maximum: 70,
        },
        level: 100,
      },
      background: "rgba(4, 47, 65, 0.8)",
      fontSize: "10px",
    },
  };
  const techs = [
    "Front End Web Development",
    "Mobile Development",
    "Back End Web Development",
    "Web Scrapping",
    "Hosting Tools",
    "Machine Learning",
    "Embbeded Systems",
    "Tools",
  ];
  const skills1 = [
    { type: "HTML5", level: 90 },
    { type: "CSS3", level: 90 },
    { type: "Bootstrap", level: 85 },
    { type: "Material UI", level: 40 },
    { type: "Javascript", level: 80 },
    { type: "Jquery", level: 40 },
    { type: "React JS", level: 80 },
  ];
  const skills2 = [
    { type: "Dart", level: 70 },
    { type: "Flutter", level: 85 },
    { type: "AndroidS", level: 65 },
  ];
  const skills3 = [
    { type: "NodeJs", level: 70 },
    { type: "ExpressJS", level: 90 },
    { type: "MongoDB", level: 90 },
    { type: "SQL", level: 85 },
    { type: "MySql", level: 85 },
    { type: "REST-API", level: 100 },
    { type: "GraphQL", level: 70 },
  ];
  const skills4 = [
    { type: "BeautifulSoup", level: 90 },
    { type: "Selenium", level: 80 },
    { type: "Scrapy", level: 70 },
  ];
  const skills5 = [
    { type: "git", level: 70 },
    { type: "github", level: 90 },
    { type: "heroku", level: 95 },
    { type: "FireBase", level: 70 },
    { type: "ZenHosting", level: 80 },
  ];
  const skills6 = [
    { type: "Numpy", level: 90 },
    { type: "Scikit-learn", level: 70 },
    { type: "Matplotlib", level: 80 },
    { type: "Pandas", level: 85 },
    { type: "TensorFlow", level: 40 },
    { type: "OpenCV", level: 40 },
    { type: "Nltk", level: 40 },
  ];
  const skills7 = [
    { type: "Arduino", level: 50 },
    { type: "Stm32", level: 30 },
    { type: "RaspberryPI", level: 65 },
  ];
  const skills8 = [
    { type: "VSC", level: 100 },
    { type: "FIGMA", level: 96 },
    { type: "LINUX", level: 85 },
    { type: "Jira", level: 75 },
  ];
  const listSkills = [
    skills1,
    skills2,
    skills3,
    skills4,
    skills5,
    skills6,
    skills7,
    skills8,
  ];
  const [skill, setSkill] = useState(techs[0]);
  const [index, setIndex] = useState(1);
  const [skills, setSkills] = useState(listSkills[0]);
  function avance() {
    if (index === 7) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

    setSkill(techs[index]);
    setSkills(listSkills[index]);
  }
  function arriere() {
    if (index === 0) {
      setIndex(7);
    } else {
      setIndex(index - 1);
    }
    setSkill(techs[index]);
    setSkills(listSkills[index]);
  }
  return (
    <div className="skillsPage" id="skills">
      <div className="codeSkills">And Here Are My Skills</div>
      <div className="makeCol">
        <div className="mySkills">
          <img
            className="skillsImage"
            src="/images/code.png"
            alt=""
            data-aos="fade-right"
          />

          <div className="skillsBar" data-aos="fade-left">
            {
              <SkillBar
                skills={skills}
                height={"30px"}
                colors={colors}
                animationDuration={1000}
              />
            }
          </div>
        </div>
        <div className="typesSlider">
          <svg
          onClick={arriere}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <div className="skillType">{skill}</div>
          <svg
          onClick={avance}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>
      </div>
      <img className="rocket" src="/images/rocket.gif" alt="" />
    </div>
  );
}

export default SkillsBars;
