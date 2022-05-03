import React, { useEffect } from "react";
import "./codingSkills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function CodingSkills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
          <div className="codeSkills">My Skills</div>
          <div className="skillsGrid">
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={90}
          text={`${"Flutter"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={96}
          text={`${"html 5"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={88}
          text={`${"css 3"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={96}
          text={`${"Bootstrap"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={69}
          text={`${"javascript"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={78}
          text={`${"React js"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={53}
          text={`${"Node js"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={60}
          text={`${"express js"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={70}
          text={`${"Mongo db"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={90}
          text={`${"Sql"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={80}
          text={`${"Redux"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>

      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={80}
          text={`${"Python"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={90}
          text={`${"Selenium"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={60}
          text={`${"java"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-left">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={84}
          text={`${"Linux"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
      <div data-aos="flip-right">
        <CircularProgressbar
          className="circleBar"
          circleRatio={0.9}
          value={78}
          text={`${"Git"}`}
          styles={buildStyles({
            textSize: "16px",

            pathTransitionDuration: 0.5,

            pathColor: `rgba(4, 20, 94, 0.8)`,
            textColor: "#fec7d7",
            trailColor: "white",
          })}
        />
      </div>
    </div>
    </div>
  );
}

export default CodingSkills;
