import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Museum from "/Museum.jpg";

interface props {
    windowSize: number;
}

export default function About({ windowSize }: props) {
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const Ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: Ref });
    const y =
        windowSize <= 640
            ? useParallax(scrollYProgress, 0)
            : useParallax(scrollYProgress, 300);
    return (
        <div
            id="about"
            className="flex h-screen bg-[#252627] justify-center items-center snap-center"
        >
            <div className="flex flex-col sm:flex-row w-[90%] h-[90%] justify-between gap-5 items-center text-white">
                <motion.h1
                    ref={Ref}
                    className="underline text-5xl lg:text-7xl font-bold"
                    style={{ y }}
                >
                    About
                </motion.h1>
                <motion.p
                    className="max-w-[80%] sm:max-w-[40%] text-sm lg:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                >
                    My name is Mark Ngu, but I prefer to go by my middle name
                    Gabe. I am currently enrolled in my 3rd year of Software
                    Engineering at the University of Calgary. I am interested in
                    full-stack development and am always open to learning new
                    things! In my free time I enjoy various activities such as
                    basketball 🏀, games 🎮, and travelling ✈️.
                </motion.p>
                <motion.img
                    src={Museum}
                    className="max-w-[80%] sm:max-w-[30%] border-8 border-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.0 }}
                />
            </div>
        </div>
    );
}
