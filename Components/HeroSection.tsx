interface heroSectionPropTypes {
    name: string,
    position: string
}

import React, { useEffect, useRef } from "react";

import { Fade } from "react-awesome-reveal";

export const HeroSection: React.FC<heroSectionPropTypes> = ({ name, position }) => {



    return (
        <div className="flex  md:flex-row justify-center h-[100vh] w-full">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-[30px] md:gap-0">
                    <div className="flex">
                        <h1><Fade cascade duration={300} delay={500} triggerOnce className="text-[80px] signature rotate-[-10deg]" >
                            Hello !
                        </Fade></h1>
                    </div>
                    <div className="text-[18px]">
                        <Fade cascade duration={300} delay={1500} triggerOnce className="text-[28px]">
                            <h2>{`I'm ${name}`}</h2>
                        </Fade>
                        <Fade duration={300} cascade delay={2000} triggerOnce><h2>{position}</h2></Fade>
                        <Fade duration={300} cascade delay={2500} triggerOnce><h2>1 year 8 Months</h2></Fade>
                        <Fade duration={300} cascade delay={3000} triggerOnce><h2>Pune, MH, India</h2></Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}