import Menu from "./menu";
import Home from "./home";
import Skills from "./skills";
import ScrollDown from "./scrollDown";
import Services from "./services";
import "./index.css"
function App() {
  return (
  <div className="centerApp">
      <div className="App">
      <Menu />
      <div>
        <Home />
        <Skills/>
      </div>
      <ScrollDown/>
    </div>
<Services/>
  </div>
  );
}

export default App;
