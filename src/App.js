import { Navbar } from "./components/navbar/navbar.component";

import { Home } from "./components/home/Home";
import { About } from "./components/about/about.component";
import { Services } from "./components/services/service.component";
import { Experience } from "./components/experience/experience.component";
import { Projects } from "./components/projects/projects.component";
import "./App.css";
import { Education } from "./components/education/education.component";
import { Skills } from "./components/skills/skills.component";
export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      {/* <Services/> */}
      <Projects/>
    </div>
  );
};

export default App;
