import { Fade } from "react-awesome-reveal"
import { Project } from "./Project"
import { SlickCraousel } from "./SlickCraousel"

export const ProjectSection = () => {
    return (
        <div className="section flex flex-col justify-around min-h-[100vh]">
            <div className="">
                <h1><Fade>What i've done so far</Fade></h1>
            </div>
            <div className="flex items-center gap-2 h-full justify-center flex-wrap">
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}