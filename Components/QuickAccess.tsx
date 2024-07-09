
import React, { useEffect, useRef, useState } from "react"
import { Fade } from "react-awesome-reveal"

const QuickAccess = () => {

    const headerRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: any) => {
        if (e.currentTarget.classList.contains("w-[50px]")) {
            e.currentTarget.classList.remove("w-[50px]");
        }
        else {
            e.currentTarget.classList.add("w-[120px]")
        }
    }

    return (

        <div onClick={handleClick} className="fixed text-white justify-center top-[50%] origin-right right-0 z-50 transition delay-[50] bg-black w-[50px] h-[80px] rounded-md drop-shadow-lg flex items-center" ref={headerRef}>
            {`<`}
        </div>
    )
}

export default QuickAccess