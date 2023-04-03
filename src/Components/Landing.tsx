import Portrait from "/Portrait.jpg"
import TypewriterComponent from "typewriter-effect";

export default function Landing(){
    function Scroll(id:string){
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: y, behavior: "smooth"});
        }
    }
    const list: string[]=['3rd year SWE @ UCalgary','Passionate Learner']
    return(
        <div className="flex flex-col sm:flex-row h-screen justify-center items-end snap-center">
            <div className="absolute flex flex-col sm:flex-row top-0 left-0 w-full max-w-full h-screen -z-10">
                <div className="bg-[#F07605] w-full h-1/2 sm:h-screen sm:w-1/4"></div>
                <div className="bg-[#FAF9F9] w-full h-1/2 sm:h-screen sm:w-3/4"></div>
            </div>
            <div className="flex h-1/2 w-full sm:h-full justify-center items-center">       
                <img src={Portrait} className="w-[50%] sm:w-[65%] lg:w-[50%] aspect-square border-8 border-black"/>        
            </div>
            <div className="flex flex-col h-1/2 sm:h-full w-full justify-center items-center sm:items-end">
                <div className="flex flex-col items-center sm:items-start gap-10 sm:mr-20">
                    <h1 className="text-4xl sm:text-7xl font-bold">
                        Hi 👋! I'm Gabe.
                    </h1>
                    <div className=" w-full text-2xl sm:text-4xl">
                        <h1 className="font-bold">
                            I'm a...
                        </h1>
                        <div className="text-2xl sm:text-4xl">                           
                            <TypewriterComponent 
                                options={{
                                    strings: list,
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col lg:flex-row gap-5 sm:gap-2 lg:gap-5 text-base sm:text-xl items-start">
                        <div className="group cursor-pointer" onClick={() => {Scroll("about")}}>
                            About
                            <div className="max-w-0 group-hover:max-w-full transition-all duration-150 bg-black h-0.5"></div>
                        </div>
                        <div className="group cursor-pointer">
                            Experience
                            <div className="max-w-0 group-hover:max-w-full transition-all duration-150 bg-black h-0.5"></div>
                        </div>
                        <div className="group cursor-pointer">
                            Skills
                            <div className="max-w-0 group-hover:max-w-full transition-all duration-150 bg-black h-0.5"></div>
                        </div>
                        <div className="group cursor-pointer">
                            Projects
                            <div className="max-w-0 group-hover:max-w-full transition-all duration-150 bg-black h-0.5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}