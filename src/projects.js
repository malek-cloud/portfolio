import React, { useEffect, useState } from "react";
import "./projects.css";
import Aos from "aos"
import "aos/dist/aos.css"
function Projects() {
  const [mobile, setMobile] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  useEffect(()=>{
    Aos.init({duration : 1000})
}, [])
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
  return (
    <div id="projects">
      <div className="projectsTitle"> Some Things I've Built</div>
      <div className="projectBoxLeft" data-aos="fade-right">
        <iframe
          className="projectImageVH"
          src="/videos/oyembackoffice.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Oyem Back Office</div>
          <div className="projectDescLeft">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesLeft5">
            <div className="tech">Html</div>
            <div className="tech">CSS</div>
            <div className="tech">Bootstrap</div>
            <div className="tech">React JS</div>
            <div className="tech">Node Js</div>
            <div className="tech">Git</div>
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
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight5">
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
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesLeft5">
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
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight5">
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
              <div className="projecTitleLeft">Interface Jeux</div>
              <div className="projectDescLeft">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div className="technologiesLeft5">
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div
                className="technologiesRight5"
                style={{ marginRight: mobile ? "0vw" : "-10.5vw" }}
              >
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div className="technologiesLeft">
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div className="technologiesRight5"  style={{ marginRight: mobile ? "0vw" : "3.5vw" }}>
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div className="technologiesLeft">
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div
                className="technologiesRight"
                style={{ marginRight: mobile ? "0vw" : "-0.5vw" }}
              >
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div className="technologiesLeft">
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
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <div
                className="technologiesRight"
                style={{ marginRight: mobile ? "0px" : "-9.5vw" }}
              >
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
