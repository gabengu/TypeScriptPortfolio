import { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

export default function Skills(){
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
    function gridMap(){
        
    }
    return(
        <div id="skills" className="flex h-screen bg-[#252627] justify-center items-center snap-center">
            <div className="flex flex-col sm:flex-row w-[90%] h-[90%] justify-between gap-5 items-center text-white">
                <motion.h1
                    ref={Ref}
                    className="underline text-5xl lg:text-7xl font-bold"
                    style={{y}}
                >
                    Skills
                </motion.h1>
                <motion.div
                    className="flex grow justify-center items-center"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.0}}
                >
                    <div className="grid grid-cols-4 gap-3">

                    </div>
                </motion.div>
            </div>
        </div>
    )  
};