import Landing from "./Components/Landing";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

export default function App(){
    return(
        <div>        
            <Landing />   
            <About />
            <Experience />
            <Skills />
            <Projects />
        </div>
    )
}