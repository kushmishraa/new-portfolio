import { Fade } from "react-awesome-reveal"
import TypingEffect from "./TypingEffect"
import { useEffect, useRef } from "react"


export default function LandingPage() {
    const landingPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        landingPageRef.current?.addEventListener("scroll", () => {
            console.log(landingPageRef.current?.getBoundingClientRect())
        })
    }, [landingPageRef.current])

    return (
        <div className="w-full relative h-[100vh] overflow-scroll z-10 bg-transparent text-white no-scrollbar" ref={landingPageRef}>
            <div className="flex flex-col items-center justify-center h-full text-[50px]">
                <Fade>
                    <TypingEffect message={"Hello !"} />
                </Fade>
                <Fade>
                    I'm Kushagra Mishra
                </Fade>
                <Fade>
                    Software Developer
                </Fade>
            </div>
            <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="down-arrow"><path fill="none" stroke-miterlimit="10" stroke-width="4" d="M32,61.12l28-28-28,28-28-28"></path><line x1="32" x2="32" y2="61.12" fill="none" stroke="#020202" stroke-miterlimit="10" stroke-width="4"></line></svg>
            </div>
            <p className="h-[200px]">hii there </p>
        </div>
    )
}

