import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import IBM from "/IBM_logo.svg"

interface props{
    windowSize: number
}

export default function Experience({windowSize}:props){
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const Ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: Ref });
    const y = windowSize <= 640 ? useParallax(scrollYProgress, 0) : useParallax(scrollYProgress, 300)
    return(
        <div id="experience" className="flex h-screen bg-[#252627] justify-center items-center snap-center">
            <div className="flex flex-col-reverse sm:flex-row w-[90%] h-[90%] sm:h-full justify-center sm:justify-between gap-5 items-center text-white pl-5">
                <motion.div
                    className="flex flex-col items-center justify-center gap-10 grow"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.0}}
                >
                    <div className="flex">
                        <div className="flex pr-10 border-r-2 border-white h-44 items-center">
                            <img src={IBM} className="h-2/3"/>
                        </div>
                        <div className="flex flex-col pl-5 h-44 justify-center">
                            <h1 className="text-2xl lg:text-3xl font-bold">IBM</h1>
                            <ul className="text-lg lg:text-xl list-disc ml-5">
                                <li>Developer Intern</li>
                                <li>16 Months (May 2023 - August 2024)</li>
                                <li>Markham, ON</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-3xl lg:text-4xl text-center">
                        Always looking for new opportunities!
                    </div>
                </motion.div>
                <motion.h1
                    ref={Ref}
                    className="underline text-4xl md:text-5xl lg:text-7xl font-bold"
                    style={{y}}
                >
                    Experience
                </motion.h1>
            </div>
        </div>
    )
};
