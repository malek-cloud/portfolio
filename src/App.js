import Menu from "./menu";
import Home from "./home";
import Skills from "./skills";
import ScrollDown from "./scrollDown";
import Services from "./services";
import Aboutme from "./aboutme";
import SkillsBars from "./skillsBars";
import GetinTouch from "./getinTouch";
import Projects from "./projects"
import "./index.css"
function App() {
  return (
  <div className="centerApp">
      <div className="app">
      <Menu />
      <div>
        <Home />
        <Skills/>
      </div>
      <ScrollDown/>
    </div>
    <Aboutme/>
    <SkillsBars/>

    <Services/>
   <Projects/>

   <GetinTouch/>

  </div>
  );
}

export default App;
