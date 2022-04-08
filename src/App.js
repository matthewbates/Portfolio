import "./App.css";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
