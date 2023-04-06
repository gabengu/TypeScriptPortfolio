import { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
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
    const Ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: Ref });
    const y = windowSize <= 640 ? useParallax(scrollYProgress, 0) : useParallax(scrollYProgress, 300)
    return(
        <div id="projects" className="flex h-screen bg-[#252627] justify-center items-center snap-center">
            <div className="flex flex-col sm:flex-row w-[90%] h-[90%] justify-between gap-5 items-center text-white">
                <motion.div
                    className="flex grow justify-center items-center h-[80%]"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.0}}
                >
                    
                </motion.div>
                <motion.h1
                    ref={Ref}
                    className="underline text-5xl lg:text-7xl font-bold"
                    style={{y}}
                >
                    Projects
                </motion.h1>
            </div>
        </div>
    )
};
