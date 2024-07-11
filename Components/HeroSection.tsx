interface heroSectionPropTypes {
    name: string,
    position: string
}

import React from "react";

import { Fade } from "react-awesome-reveal";
import { SlideShowSvg } from "./slideShowSvg";
import Image from "next/image";

export const HeroSection: React.FC<heroSectionPropTypes> = ({ name, position }) => {

    return (
        <div className="flex flex-col md:flex-row justify-center h-[100vh] w-full">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col">
                    <div className="flex">
                        <Fade cascade duration={300} delay={500} triggerOnce className="text-[40px]">
                            Hello !
                        </Fade>
                        <span className="wave text-[40px]">👋</span>
                    </div>
                    <Fade cascade duration={200} delay={1000} triggerOnce className="text-[28px]">
                        {`I'm ${name}`}
                    </Fade>
                    <Fade cascade duration={200} delay={3000} triggerOnce>{position}</Fade>
                </div>
            </div>
            <div className=" w-full flex flex-col items-center justify-center">
                <div className="relative">
                    <Fade delay={4500} triggerOnce duration={200} className="w-full flex items-center justify-center">
                        <div className="relative w-[300px] h-[200px]">
                            <Fade triggerOnce cascade delay={4000}>
                                <Image src="/images/laptop.jpg" fill alt="img" />
                            </Fade>
                        </div>
                        <div className="absolute w-full h-full top-0 flex justify-center items-center pb-[30px]">
                            <div className="flex items-center min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]">
                                <SlideShowSvg />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}