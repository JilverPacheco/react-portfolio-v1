import { Navbar } from "./components/navbar/navbar.component";
import { Home } from "./components/home/Home";
import { About } from "./components/about/about.component";
import { Education } from "./components/education/education.component";
import { Skills } from "./components/skills/skills.component";
import { Experience } from "./components/experience/experience.component";
import { Projects } from "./components/projects/projects.component";
import { Contact } from "./components/contact/contact-component";
import { Footer } from "./components/footer/footer.component";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
