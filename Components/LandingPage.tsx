import { Fade} from "react-awesome-reveal"
import TypingEffect from "./TypingEffect"
export default function LandingPage() {
    return (
        <div className="w-full h-[100vh] bg-black text-white overflow-scroll no-scrollbar">
            <div className="flex flex-col items-center justify-center h-full text-[50px]">
                <Fade>
                    <TypingEffect message={"Hello !"}/>
                </Fade>
                <Fade>
                    <TypingEffect message={"I'm Kushagra Mishra"}/></Fade>
                <Fade>
                    Software Engineer
                </Fade>
            </div>
            <p className="h-[200px]">hii there </p>
        </div>
    )
}

