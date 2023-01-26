import Abaut from "./components/Abaut/Abaut";
import Me from "./components/Me/Me";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Line from "./components/Line/Line";

function App() {
  return (
    <div className="body">
      <NavBar></NavBar>
      <Me></Me>
      <Line></Line>
      <Abaut></Abaut>
      <Line></Line>
      <Skills></Skills>
      <Line></Line>
    </div>
  );
}

export default App;
