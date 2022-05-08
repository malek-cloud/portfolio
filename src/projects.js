import React, { useEffect, useState } from "react";
import "./projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  const [mobile, setMobile] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

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
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return (
    <div id="projects">
      <div className="projectsTitle"> Some Things I've Built</div>
      <div className="projectBoxLeft" data-aos="fade-right">
        <iframe
          className="projectImageVH"
          src="/videos/oyemback.mp4"
          frameBorder="0"
          allowFullScreen
          title="video"
        />
        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Oyem Back Office</div>
          <div className="projectDescLeft">
            Oyem is a project for psychological concerns, its Idea is mainly
            about having chats with patients, publishing articles, noting the
            progress of the patient situation and more. So Oyem BackOffice is
            the web application made for administrators and Employees, so they
            can manage patients, ensure the progress of their work, while
            respecting the security of each patient.
            <br />
            Here is the code :
            <a
              style={{ color: "aqua" }}
              href="https://github.com/malek-cloud/adminFrontEnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Oyem BackOffice
            </a>{" "}
            &{" "}
            <a
              style={{ color: "aqua" }}
              href="https://github.com/malek-cloud/oyem_backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Backend
            </a>
          </div>
          <div className="technologiesLeft5">
          <div className="tech"><b>Technologies:</b></div>

            <div className="tech">Html</div>
            <div className="tech">CSS</div>
            <div className="tech">React JS</div>
            <div className="tech">Node Js</div>
            <div className="tech">Git</div>
            <div className="tech">Bootstrap</div>

            <div className="tech">VSCode</div>
            <div className="tech">MongoDB</div>
            <div className="tech">REST API</div>
            <div className="tech">ExpressJs</div>
          </div>
        </div>
      </div>
      <div className="projectBoxRight" data-aos="fade-left">
        <iframe
          className="projectImageV"
          src="/videos/yummy.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <div className="projectdetailsRight">
          <div className="projecTitleRight">Happy Yummy</div>
          <div className="projectDescRight">
            Happy Yummy is an hybrid e-commerce mobile application, made for
            food delivery. It's fully designed and developed by me. It have a
            beautiful user interface & amazing user Experience, and of course
            it's fully responsive. <br /> It ensures multiple functionalities
            such us authentication , displaying products, passing orders, adding
            a product to favorite list, displaying time of work, location,
            deleting some orders, checkout, and more.. This app is made during
            my first year with computer science for a summer internship, and I
            spent 2 months between learning flutter and developing it from
            scratch. <br />
            You can find the code in here :{" "}
            <a
              style={{ color: "aqua" }}
              href="https://github.com/malek-cloud/food-delivery-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Food Delivery App
            </a>
          </div>
          <div className="technologiesRight5">
          <div className="tech"><b>Technologies:</b></div>

            <div className="tech">Dart</div>
            <div className="tech">Flutter</div>
            <div className="tech">REST API</div>
            <div className="tech">Postman</div>
            <div className="tech">Git</div>
            <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxLeft" data-aos="fade-right">
        <iframe
          className="projectImageV"
          src="/videos/oyem.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />

        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Oyem Unity</div>
          <div className="projectDescLeft">
            As Mentioned above in the Oyem BackOffice app about the utility of
            Oyem project, this is the client side of it .
            <br />
            It's an hybrid mobile application made for patients, so they can
            authenticate, pay for their usage, see the articles written by their
            coaches, liking, commenting and publishing its, consult their
            profiles or even the coaches profiles, chatting with their coaches
            whenever they feel bad, changing their coach. Patients can get in
            the app as visitors without authentication but they won't have
            access to all functionalities provided by the app. And also they can
            give their feedback if they want, all of this and more.. Oyem
            project have many other functionalities that i intend add them as
            soon as possible.
            <br />
            The full code in provided here :{" "}
            <a
              style={{ color: "aqua" }}
              href="https://github.com/malek-cloud/oyem_clientSide"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Oyem Unity
            </a>
            &{" "}
            <a
              style={{ color: "aqua" }}
              href="https://github.com/malek-cloud/oyem_backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Backend
            </a>
          </div>
          <div className="technologiesLeft5">
          <div className="tech"><b>Technologies:</b></div>

            <div className="tech">Dart</div>
            <div className="tech">Flutter</div>
            <div className="tech">Node JS</div>
            <div className="tech">Express JS</div>
            <div className="tech">MongoDB</div>
            <div className="tech">REST API</div>
            <div className="tech">Postman</div>
            <div className="tech">Git</div>
            <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div id="4" className="projectBoxRight" data-aos="fade-left">
        <iframe
          className="projectImageV"
          src="/videos/pfa.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <div className="projectdetailsRight">
          <div className="projecTitleRight">EasyCred</div>
          <div className="projectDescRight">
            EasyCred is an hybrid mobile application that developed it with my
            mate Nahrawene Ben Hmida as final year project. This Project is
            about collecting banks credit simulators in one app to help people
            avoid searching manually in each bank site and each simulator in
            that site. Because with easy credit you'll be able to enter the data
            of your preferred credit data and get as result the most suitable
            credits. In order to run this app we scrapped all tunisian bank
            credit simulators, to control them remotely via the app and get the
            correct result thanks to a sophisticated comparison algorithm.
          </div>
          <div className="technologiesRight5">
          <div className="tech"><b>Technologies:</b></div>

            <div className="tech">Dart</div>
            <div className="tech">Flutter</div>
            <div className="tech">Python</div>
            <div className="tech">Selenium</div>
            <div className="tech">Git</div>
            <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <a
        href="#5"
        className="more"
        onClick={() => {
          setSeeMore(!seeMore);
        }}
      >
        {" "}
        {mobile && !seeMore ? "See More Projects.." : ""}
      </a>

      {!mobile || (mobile && seeMore) ? (
        <div id="5">
          <div className="projectBoxLeft" data-aos="fade-right">
            <iframe
              className="projectImageV"
              src="/videos/jeux.mp4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />

            <div className="projectdetailsLeft">
              <div className="projecTitleLeft">Game Interface</div>
              <div className="projectDescLeft">
                While learning and training on developing by flutter , I've
                created this beautiful animation interface for a gaming
                application.
              </div>
              <div className="technologiesLeft5">
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxRight" data-aos="fade-left">
            <iframe
              className="projectImageV"
              src="/videos/calcul.mp4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <div className="projectdetailsRight">
              <div className="projecTitleRight">Calculator</div>
              <div className="projectDescRight">
                Calculator is a mobile application, designed and developed by
                me, it's fully responsive.
                <br />
                It become a professional calculator when the phone is
                horizontally rotated. I used wix.com to create my own logo.
              </div>
              <div
                className="technologiesRight5"
                style={{ marginRight: mobile ? "0vw" : "-6.5vw" }}
              >
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">WIX(design)</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxLeft" data-aos="fade-right">
            <img
              src="/images/pfe.png"
              alt="maker skills up"
              className="projectImage"
            />

            <div className="projectdetailsLeft">
              <div className="projecTitleLeft">Maker Skills Up</div>
              <div className="projectDescLeft">
                Responsive Web application that includes an e-commerce part and
                a part for displaying workshops and events by category, their
                details, and also the possibility to join your preferred ones.
                I'm coding it for my end of studies internship.
                <br />
                The full code in provided here :{" "}
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/pfe-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Maker Skills Up
                </a>{" "}
                &{" "}
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/beMaker-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Backend
                </a>
              </div>
              <div className="technologiesLeft">
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">HTML5</div>
                <div className="tech">CSS3</div>
                <div className="tech">Bootstrap</div>
                <div className="tech">Javascript</div>
                <div className="tech">React JS</div>
                <div className="tech">Node JS</div>
                <div className="tech">Express JS</div>
                <div className="tech">MongoDB</div>
                <div className="tech">Git</div>
                <div className="tech">Heroku</div>
                <div className="tech">Figma</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxRight" data-aos="fade-left">
            <img
              src="/images/portfolio.png"
              alt="portoflio malek"
              className="projectImage"
            />

            <div className="projectdetailsRight">
              <div className="projecTitleRight">My Portfolio</div>
              <div className="projectDescRight">
                I've designed and coded my portfolio webSite from scratch to
                make it easier for everyone to know me and contact me whenever
                they need my services. It's fully responsive.
                <br />
                And here is the code :
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Malek Guedda Portfolio
                </a>
              </div>
              <div
                className="technologiesRight5"
                style={{ marginRight: mobile ? "0vw" : "0vw" }}
              >
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">HTML5</div>
                <div className="tech">CSS3</div>
                <div className="tech">React JS</div>
                <div className="tech">Heroku</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxLeft" data-aos="fade-right">
            <img
              src="/images/library.jpg"
              alt="library project"
              className="projectImage"
            />

            <div className="projectdetailsLeft">
              <div className="projecTitleLeft">Library Management</div>
              <div className="projectDescLeft">
                Library management is a faculty project created in collaboration
                with my colleges Nawel Hajji and Oussema Najjar .It's about
                managing administrators, books and students that come to the
                library.
                <br />
                The Front End Code is here :
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/Library-Administration-ReactJs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Library Management
                </a>
              </div>
              <div className="technologiesLeft">
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">React JS</div>
                <div className="tech">Postman</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
                <div className="tech">Springboot</div>
              </div>
            </div>
          </div>
          <div className="projectBoxRight" data-aos="fade-left">
            <img
              src="/images/makerAcademy.jpg"
              alt="maker Academy"
              className="projectImage"
            />

            <div className="projectdetailsRight">
              <div className="projecTitleRight">Maker Academy</div>
              <div className="projectDescRight">
                A static website as a trial to maker a beautiful web interface
                using html and css.
              </div>
              <div
                className="technologiesRight"
                style={{ marginRight: mobile ? "0vw" : "1vw" }}
              >
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxLeft" id="12" data-aos="fade-right">
            <img
              src="/images/dashboad.png"
              alt="Dashboard"
              className="projectImage"
            />

            <div className="projectdetailsLeft">
              <div className="projecTitleLeft">Dashboard Maker Skills Up</div>
              <div className="projectDescLeft">
                A web app for managing the client side of Maker skills up . It's
                also a part of my end-of-studies internship. It's responsible
                about managing events, workshops, consulting and even download
                an excel file for the table of the participants of each workshop
                or event. It includes also products and orders management and a
                dashboard for revenues.
                <br />
                The code is provided here :
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/beMaker-Admin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Maker Dashboard
                </a>{" "}
                &{" "}
                <a
                  style={{ color: "aqua" }}
                  href="https://github.com/malek-cloud/beMaker-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Backend
                </a>
              </div>
              <div className="technologiesLeft">
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">React JS</div>
                <div className="tech">Express JS</div>
                <div className="tech">MongoDB</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
              </div>
            </div>
          </div>
          <div className="projectBoxRight" data-aos="fade-left">
            <img
              src="/images/cci.png"
              alt="portoflio malek"
              className="projectImage"
            />

            <div className="projectdetailsRight">
              <div className="projecTitleRight">CCI BOOST</div>
              <div className="projectDescRight">
                I've Participated in the creation of CCI BOOST with the talented
                team of OPTIMA junior enterprise. We have designed it with Figma
                and created with wordpress.
              </div>
              <div
                className="technologiesRight"
                style={{ marginRight: mobile ? "0px" : "-7vw" }}
              >
          <div className="tech"><b>Technologies:</b></div>

                <div className="tech">Wordpress</div>
                <div className="tech">Figma</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <a
        href={"#4"}
        className="more"
        onClick={() => {
          setSeeMore(!seeMore);
        }}
      >
        {" "}
        {mobile && seeMore ? "See Less.." : ""}
      </a>
    </div>
  );
}

export default Projects;
