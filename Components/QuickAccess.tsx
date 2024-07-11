
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react"
import { LeftArrow } from '../public/Svg/LeftArrow';
import { Fade } from "react-awesome-reveal"

const QuickAccess = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: any) => {
        e.currentTarget.style.transition = "all 150ms linear";
        arrowRef.current && (arrowRef.current.style.transition = "all 0.5s")
        if (e.currentTarget.classList.contains("translate-x-[90px]")) {
            e.currentTarget.classList.replace("translate-x-[90px]", "translate-x-[0px]")
            e.currentTarget.classList.replace("h-[100px]", "h-[180px]");
            arrowRef.current && (arrowRef.current.style.transform = "rotate(180deg)")
        } else {
            e.currentTarget.classList.replace("translate-x-[0px]", "translate-x-[90px]")
            e.currentTarget.classList.replace("h-[180px]", "h-[100px]");
            arrowRef.current && (arrowRef.current.style.transform = "rotate(360deg)")
        }
    }

    const handleCardClick = (e: any) => {
        e.stopPropagation();
    }

    return (
        <div onClick={handleClick} className="p-[5px] fixed top-1/2 overflow-hidden  text-white translate-x-[90px] origin-right right-0 z-50 transition delay-[50] bg-black w-[120px] h-[100px] rounded-lg drop-shadow-lg flex items-center" ref={headerRef}>
            <div className="w-full flex items-center">
                <div className="text-xl font-bold [&>svg]:w-[20px] [&>svg]:h-[20px]" ref={arrowRef}><LeftArrow fill={"#FFFFFF"} /></div>
                <div className="w-full flex flex-col gap-2 justify-center items-center">
                    <div className="relative w-[35px] h-[35px] max-w-[35px] max-h-[35px] hover:scale-[1.2]" onClick={handleCardClick}>
                        <Image src="/Svg/gmail_logo.svg" fill alt="gmail" />
                    </div>
                    <div className="relative w-[35px] h-[35px] max-w-[35px] max-h-[35px] hover:scale-[1.2]" onClick={handleCardClick}>
                        <Image src="/Svg/linkedin-icon.svg" fill alt="gmail" />
                    </div>
                    <div className="relative w-[35px] h-[35px] max-w-[35px] max-h-[35px] hover:scale-[1.2]" onClick={handleCardClick}>
                        <Image src="/Svg/github-icon-2.svg" fill alt="gmail" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickAccess