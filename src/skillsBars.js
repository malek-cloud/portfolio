import React, { useEffect } from "react";
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
  const skills = [
    { type: "HTML5", level: 90 },
    { type: "CSS3", level: 90 },
    { type: "Bootstrap", level: 85 },
    { type: "Material UI", level: 40 },
    { type: "Javascript", level: 80 },
    { type: "Jquery", level: 40 },
    { type: "React JS", level: 80 },
  ];

  return (
    <div className="skillsPage">
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
        {  <SkillBar
            skills={skills}
            height={"30px"}
            colors={colors}
            animationDuration={1000}
          />}
        </div>
      </div>
      <div className="typesSlider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <div className="skillType">Front End Web Development</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-caret-right-fill"
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
