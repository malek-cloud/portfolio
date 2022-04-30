import React from "react";
import "./services.css";
function Services() {
  return (
    <div className="serviceCenter" id="aboutme">
      <div className="titleServices">
        As a software engineer <br />I can help by
      </div>
      <div className="servicesGrid">
        <div className="serviceBox">
        <img  className="icon" src="/images/teach.png" alt="" />
          <div className="boxServiceTitle"> Giving IT Courses</div>
        </div>
        <div className="serviceBox">
        <img  className="icon" src="/images/webDev.png" alt="" />
          <div className="boxServiceTitle">Developing WebSites</div>
        </div>
        <div className="serviceBox">
          <div>
            {" "}
           {/*  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg> */}
            <img  className="icon" src="/images/mobileDev.png" alt="" />
          </div>
          <div className="boxServiceTitle">Developing Mobile Applications</div>
        </div>
        <div className="serviceBox">
        <img  className="icon" src="/images/editProject.png" alt="" />
          <div className="boxServiceTitle">Editing Existing Projects</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
