import Landing from "./Components/Landing";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { useEffect, useState } from "react";

export default function App(){
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWindow(){
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", watchWindow)
        return function(){
            window.removeEventListener("resize", watchWindow)
        }
    },[])
    return(
        <div>        
            <Landing />   
            <About windowSize={windowSize}/>
            <Experience windowSize={windowSize}/>
            <Skills windowSize={windowSize}/>
            <Projects windowSize={windowSize}/>
        </div>
    )
}