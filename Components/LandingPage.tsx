import { useEffect, useRef } from "react"
import { Fade } from "react-awesome-reveal"

import TypingEffect from "./TypingEffect"
import { SlideShowSvg } from "./slideShowSvg";
import { HeroSection } from "./HeroSection";
import { EducationSection } from "./EducationSection";


export default function LandingPage() {
    const landingPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        landingPageRef.current?.addEventListener("scroll", () => {
            console.log(landingPageRef.current?.getBoundingClientRect())
        })
    }, [landingPageRef.current])

    return (
        <div className="w-full relative no-scrollbar" ref={landingPageRef}>
            <div>
                <HeroSection name="Kushagra Mishra" position="Software Developer" />
            </div>
            <div>
                <EducationSection />
            </div>
        </div>
    )
}

