import React, {useEffect} from "react";
import "./aboutme.css";
import Aos from "aos"
import "aos/dist/aos.css"
function Aboutme() {
useEffect(()=>{
      Aos.init({duration : 1000})
}, [])
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
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement. I’m
            focused on building accessible, human-centered products at
            Upstatement.
          </div>
          <div className="bottomrectangle">
            <div className="topVertLine"> </div>

            <div className="topHorizLine"> </div>
          </div>
        </div>
       </div>
        <img src="/images/malek1.png" className="aboutmeImage" alt="aboutme"   data-aos="fade-left" />
      </div>
    </div>
  );
}

export default Aboutme;
