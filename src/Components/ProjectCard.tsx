import MFR from "/MFR.png"
interface props{
    img: string,
    desc: string,
    tech: string[]
}

export default function ProjectCard({img, desc, tech}:props) {
    return(
        <div className="h-96 flex justify-center items-center font-serif">
            <div className="flex flex-col sm:flex-row w-4/5 h-full bg-[#191919] rounded-xl py-10">
                <div className="flex justify-center items-center w-1/2">
                    <img src={MFR} className="h-full w-full object-contain m-2"/>
                </div>
                <div className="flex flex-col grow gap-7 py-3 w-1/2 px-3">
                    <h1 className="font-bold text-3xl">
                        MyFashionRack
                    </h1>
                    <h1 className="mr-2">
                        A full-stack social media web application designed to allow users to easily share their own outfits and find inspiration from others. Built using NextJS and React for the front-end, 
                        NodeJS and Express build the backend and REST APIs that query from the Mongo database.
                    </h1>
                    <div className="mt-auto flex">

                    </div>
                </div>
            </div>
        </div>
    )
};
