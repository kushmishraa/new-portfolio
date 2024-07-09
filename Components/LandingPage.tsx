import { useEffect, useRef } from "react"
import { Fade } from "react-awesome-reveal"

import TypingEffect from "./TypingEffect"
import { SlideShowSvg } from "./slideShowSvg";


export default function LandingPage() {
    const landingPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        landingPageRef.current?.addEventListener("scroll", () => {
            console.log(landingPageRef.current?.getBoundingClientRect())
        })
    }, [landingPageRef.current])

    return (
        <div className="w-full relative no-scrollbar" ref={landingPageRef}>
            <div className="flex flex-col md:flex-row justify-center h-[100vh] w-full">
                <div className="flex flex-col text-[50px] items-center justify-center w-full">
                    <Fade cascade duration={200} delay={70} triggerOnce>
                        <span>Hello !</span><span>👋</span>
                    </Fade>
                    <Fade cascade duration={200} delay={1000} triggerOnce>
                        I'm Kushagra Mishra
                    </Fade>
                    <Fade cascade duration={200} delay={3000} triggerOnce>Software Developer</Fade>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center min-w-[170px] min-h-[170px] max-w-[200px] max-h-[200px]"><SlideShowSvg /></div>
                </div>
            </div>
            <div className="h-[200vh]"></div>
        </div>
    )
}

