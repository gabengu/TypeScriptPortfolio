import { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import C  from "/icons8-c-programming-480.png"
import Cpp from "/icons8-c++-480.png"
import CSS from "/icons8-css3-480.png"
import Express from "/icons8-express-js-480.png"
import HTML from "/icons8-html-5-480.png"
import Java from "/icons8-java-480.png"
import JS from "/icons8-javascript-480.png"
import MySQL from "/icons8-mysql-logo-480.png"
import Node from "/icons8-nodejs-480.png"
import PostgreSQL from "/icons8-postgresql-480.png"
import Python from "/icons8-python-480.png"
import React from "/icons8-react-native-480.png"
import Tailwind from "/icons8-tailwindcss-480.png"
import FastAPI from "/fastapi-seeklogo.com.svg"
import Mongo from "/icons8-mongodb-480.png"
import TypeScript from "/icons8-typescript-480.png"

export default function Skills(){
    const images = [C, Cpp, Python, Java, JS, TypeScript, HTML, CSS, React, Node, Express, FastAPI, Tailwind, MySQL, PostgreSQL, Mongo]
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
                    className="flex grow justify-center items-center h-[80%]"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.0}}
                >
                    <div className="flex h-full overflow-hidden flex-wrap gap-5 justify-center items-center w-[80%]">
                        {images.map(image => {
                            return(
                                <div className="flex justify-center items-center rounded-full bg-white w-1/5 md:w-[15%] h-auto aspect-square">
                                    <img src={image} className="w-4/5 h-auto"/>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )  
};