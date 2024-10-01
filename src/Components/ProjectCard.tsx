interface props{
    img: string,
    title: string,
    desc: string,
    tech?: string[]
}

export default function ProjectCard({img, title, desc, tech}:props) {
    return(
        <div className="h-96 flex justify-center items-center font-serif">
            <div className="flex flex-col sm:flex-row w-4/5 h-full bg-[#191919] rounded-xl py-10">
                <div className="flex justify-center items-center w-1/2">
                    <img src={img} className="h-full w-full object-contain m-2"/>
                </div>
                <div className="flex flex-col grow gap-7 py-3 w-1/2 px-3">
                    <h1 className="font-bold text-3xl">
                        {title}
                    </h1>
                    <h1 className="mr-2">
                        {desc}
                    </h1>
                    <div className="mt-auto flex">

                    </div>
                </div>
            </div>
        </div>
    )
};
