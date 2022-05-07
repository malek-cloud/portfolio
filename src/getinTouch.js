import React, { useEffect, useState, useRef } from "react";
import "./getInTouch.css";
import Tappable from "react-tappable";
import Aos from "aos";
import emailjs from "@emailjs/browser";

import "aos/dist/aos.css";
function GetinTouch() {
  const [mobile, setMobile] = useState("");
  const form = useRef();
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    if (windowDimenion.winWidth <= 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    console.log(windowDimenion.winWidth + " size");
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [empty, setEmpty] = useState("");
  function sendMail(e) {
    setEmpty("");
    e.preventDefault();
    if ((name || email || description) === "") {
      setEmpty("Fill The Form");
      setTimeout(function () {
        setEmpty("");
      }, 3000);
      return;
    } else {
      setName("");
      setBudget("");
      setDeadline("");
      setDescription("");
      setEmail("");
      setSuccess(true);
      emailjs
        .sendForm(
          "service_ha8epvu",
          "template_ws0wuhw",
          form.current,
          "ObvedbQ0Yg1t8ZMUv"
        )
        .then(
          (result) => {
            console.log(form.current);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            console.log(form.current);
          }
        );

      setTimeout(function () {
        setSuccess(false);
      }, 3000);
      console.log("slicking");
    }
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="touchPage" id="contact" data-aos="fade-right">
      <div className="getInTouch"> Get In Touch</div>

      <form ref={form} onSubmit={sendMail}>
        <div className="inlineFormImage">
          <div>
            <div className="inputLabel">Name</div>
            <input
              className="input"
              type="text"
              placeholder="Name.."
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="inputLabel">Email</div>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email.."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="inputLabel">Budget</div>
            <input
              className="input"
              type="number"
              name="budget"
              placeholder="1000DT.."
              value={budget}
              onChange={(e) => {
                setBudget(e.target.value);
              }}
            />

            <div className="inputLabel">Preferred Deadline</div>
            <input
              className="input"
              type="date"
              name="deadline"
              placeholder="DD/MM/YYYY.."
              value={deadline}
              onChange={(e) => {
                setDeadline(e.target.value);
              }}
            />
          </div>
          <div className="lol">
            <img className="touchImage" src="/images/coffee-cup.png" alt="" />

            <div>
              <div className="inputLabel">Project Description</div>
              <textarea
                name="description"
                placeholder="Project Description ..."
                className="textarea"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                cols="46"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        {empty !== "" ? (
          <div className="done">
            {empty}
            <div style={{ fontSize: "30px", textAlign: "center" }}>😥</div>
          </div>
        ) : (
          <div></div>
        )}
        {success ? (
          <div className="done">
            Thank you for
            <br /> your <br /> message{" "}
            <div style={{ fontSize: "30px", textAlign: "center" }}>✔</div>
          </div>
        ) : (
          <div></div>
        )}
        {mobile ? (
          <Tappable className="send" type="submit" onTap={sendMail}>
            Send
          </Tappable>
        ) : (
          <div className="send" type="submit" onClick={sendMail}>
            Send
          </div>
        )}
      </form>
      <div className="contactIcons">
        <a
          href="https://www.github.com/malek-cloud/"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a
          href="https://www.stackoverflow.com/users/13376028/malek-guedda"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-stack-overflow"
            viewBox="0 0 16 16"
          >
            <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
            <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/guedda-malek-a1713119a/"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/louka.malekgd"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </a>
        <a href="mailto:malekguedda23@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-envelope-open"
            viewBox="0 0 16 16"
          >
            <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
          </svg>
        </a>
      </div>
      <div className="builtBy">
        Designed & Built ♥ with passion by <br />{" "}
        <span style={{ color: "rgb(212, 140, 176)" }}>Malek Guedda</span> ©2022
      </div>
    </div>
  );
}

export default GetinTouch;
