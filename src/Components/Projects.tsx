import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface props{
    windowSize: number
}

export default function Projects({windowSize}:props) {
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const Ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: Ref });
    const y = windowSize <= 640 ? useParallax(scrollYProgress, 0) : useParallax(scrollYProgress, 300)
    const settings = {
        dots: true,
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
