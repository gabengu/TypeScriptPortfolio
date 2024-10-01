import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import MFR from "/MFR.png"

interface props{
    windowSize: number
}

const MFRdesc:string = `A full-stack social media web application designed to allow users to easily share their own outfits and find inspiration from others. 
Built using NextJS and React for the front-end, NodeJS and Express build the backend and REST APIs that query from the Mongo database.`

export default function Projects({windowSize}:props) {
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const Ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: Ref });
    const y = windowSize <= 640 ? useParallax(scrollYProgress, 0) : useParallax(scrollYProgress, 300)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div id="projects" className="flex h-screen bg-[#252627] justify-center items-center snap-center">
            <div className="flex flex-col-reverse sm:flex-row w-[90%] h-[90%] justify-between gap-5 items-center text-white">
                <motion.div
                    className="flex grow justify-center items-center h-[80%] px-5 max-w-[80%] sm:max-w-[60%]"
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1.0}}
                >
                    <Slider {...settings} className="w-full">
                        <ProjectCard img={MFR} title="MyFashionRack" desc={MFRdesc}/>
                        <ProjectCard img={MFR} title="MyFashionRack" desc={MFRdesc}/>
                        <ProjectCard img={MFR} title="MyFashionRack" desc={MFRdesc}/>
                    </Slider>
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
