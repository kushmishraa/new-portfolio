
import React, { useEffect, useRef, useState } from "react"
import { Fade } from "react-awesome-reveal"

const QuickAccess = () => {

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                headerRef.current?.classList.remove("scale-x-0");
                headerRef.current?.classList.add("scale-x-1");
            }
            else if (window.scrollY == 0) {
                headerRef.current?.classList.remove("scale-x-1");
                headerRef.current?.classList.add("scale-x-0");
            }
        })
    }, [headerRef.current])

    return (

        <div className="fixed top-[50%] scale-x-0 origin-right right-0 z-50 transition delay-[50] bg-black w-[100px] h-[150px] rounded-md drop-shadow-lg flex items-center" ref={headerRef}>

        </div>
    )
}

export default QuickAccess