import React, { useEffect } from "react";
import "./aboutme.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="aboutme" className="aboutmePage">
      <div className="aboutme">Let's talk About Me</div>
      <div className="text">
        <div>
          <div className="descBloc" data-aos="fade-right">
            <div className="toprectangle">
              <div className="topHorizLine"> </div>

              <div className="topVertLine"> </div>
            </div>
            <div className="description">
              I’m a software engineering Student Specialized In IOT, and I'm
              interested in building exceptional digital experiences .
              I have serious passion for creating beautiful & useful things.
              <br/>
              Currently, I’m focused on full stack development for web and
              mobile.
              <div className="makeSthg" style={{marginTop : "10px" , textAlign:"center"}} ><a href="#contact">Let's make something special.</a></div>
            </div>
            <div className="bottomrectangle">
              <div className="topVertLine"> </div>

              <div className="topHorizLine"> </div>
            </div>
          </div>
        </div>
        <img
          src="/images/malek1.png"
          className="aboutmeImage"
          alt="aboutme"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
}

export default Aboutme;
