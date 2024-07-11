import { useEffect, useRef } from "react"

import { HeroSection } from "./HeroSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";


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
                <ExperienceSection />
            </div>
            <div>
                <SkillsSection />
            </div>
        </div>
    )
}

