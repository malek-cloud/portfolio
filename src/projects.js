import React, {useEffect, useState} from "react";
import "./projects.css";
function Projects() {
  const [mobile, setMobile]=useState(false)

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    if(windowDimenion.winWidth <= 700){
      setMobile(true)
    }else{
      setMobile(false)
    }
    console.log( windowDimenion.winWidth + " size")
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])
  return (
    <div>
      <div className="projectsTitle"> Some Things I've Built</div>
      <div className="projectBoxLeft">
      
      <iframe
      className="projectImage"
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
          <div className="technologiesLeft">
                <div className="tech">Html</div>
                <div className="tech">CSS</div>
                <div className="tech">Bootstrap</div>
                <div className="tech">React JS</div>
                <div className="tech">Node Js  <br/></div>
               
                <div className="tech">Express Js</div>
                <div className="tech">MongoDB</div>
                <div className="tech">REST API</div>
                <div className="tech">VSCode</div>
                <div className="tech">Git</div>
          </div>
        </div>
      </div>
      <div className="projectBoxRight">
      <iframe
      className="projectImage"
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
          <div className="technologiesRight">
                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">REST API</div>
                <div className="tech">Postman</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxLeft">
      <iframe
      className="projectImage"
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
          <div className="technologiesLeft">
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
      <div className="projectBoxRight">
      <iframe
      className="projectImage"
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
          <div className="technologiesRight">
                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">Python</div>
                <div className="tech">Selenium</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxLeft">
      <iframe
      className="projectImage"
        src="/videos/jeux.mp4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />

        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Interface Jeux</div>
          <div className="projectDescLeft">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesLeft">
                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxRight">
      <iframe
      className="projectImage"
        src="/videos/calcul.mp4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
        <div className="projectdetailsRight">
          <div className="projecTitleRight">Calculator</div>
          <div className="projectDescRight">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight" style={{marginRight : mobile? "0vw"  : "-9.5vw"}}>
                <div className="tech">Dart</div>
                <div className="tech">Flutter</div>
                <div className="tech">WIX(design)</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
        <div className="projectBoxLeft">
      <img src="/images/pfe.png" alt="maker skills up" className="projectImage" />

        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Maker Skills Up</div>
          <div className="projectDescLeft">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
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
      <div className="projectBoxRight">
      <img src="/images/portfolio.png" alt="portoflio malek" className="projectImage" />

        <div className="projectdetailsRight">
          <div className="projecTitleRight">My Portfolio</div>
          <div className="projectDescRight">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight">
                <div className="tech">HTML5</div>
                <div className="tech">CSS3</div>
                <div className="tech">React JS</div>
                <div className="tech">Heroku</div>
                <div className="tech">Git</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxLeft">
      <img src="/images/library.jpg" alt="library project" className="projectImage" />

        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Library Management</div>
          <div className="projectDescLeft">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
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
      <div className="projectBoxRight">
      <img src="/images/makerAcademy.jpg" alt="maker Academy" className="projectImage" />

        <div className="projectdetailsRight">
          <div className="projecTitleRight">Maker Academy</div>
          <div className="projectDescRight">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight" style={{marginRight : mobile? "0vw" :  "-8.5vw"}}>
                <div className="tech">HTML</div>
                <div className="tech">CSS</div>
                <div className="tech">VSCode</div>
          </div>
        </div>
      </div>
      <div className="projectBoxLeft">
      <img src="/images/dashboad.png" alt="Dashboard" className="projectImage" />

        <div className="projectdetailsLeft">
          <div className="projecTitleLeft">Dashboard Maker Skills Up</div>
          <div className="projectDescLeft">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
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
      <div className="projectBoxRight">
      <img src="/images/cci.png" alt="portoflio malek" className="projectImage" />

        <div className="projectdetailsRight">
          <div className="projecTitleRight">CCI BOOST</div>
          <div className="projectDescRight">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </div>
          <div className="technologiesRight"  style={{marginRight : mobile ? "0px" :   "-20.7vw"}} >
                <div className="tech">Wordpress</div>
                <div className="tech">Figma</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
