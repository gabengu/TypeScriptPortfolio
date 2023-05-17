import MFR from "/MFR.png"

interface props{
    
}

export default function ProjectCard({}) {
    return(
        <div className="h-96 flex justify-center items-center">
            <div className="max-w-[500] h-full">
                <img src={MFR} className="w-full h-full object-cover object-center rounded-lg"/>
            </div>
        </div>
    )
};
