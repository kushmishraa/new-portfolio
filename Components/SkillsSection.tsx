import Image from "next/image"
import React from "react"
import { Fade } from "react-awesome-reveal"
export const SkillsSection = () => {
    const skillsLogo = ["nextjs.svg", "nodejs-icon.svg", "github-icon-2.svg", "docker-tile.svg", "Sql_data_base_with_logo.svg", "React-icon.svg"]
    const fadeDirection = new Array();
    fadeDirection.length = skillsLogo.length;
    fadeDirection.fill("");
    fadeDirection[0] = "left";
    fadeDirection[fadeDirection.length - 1] = "right"
    return (
        <div className="section">
            <Fade>
                <div><h1>Skills</h1></div>
            </Fade>

            <div className="w-full flex justify-center">
                <div className="flex w-1/2 justify-center gap-8">
                    <Fade direction="left">
                        {
                            skillsLogo.map((logoName) => {
                                return (
                                    <div className="relative w-[80px] h-[80px] hover:scale-[1.2]">
                                        <Fade>
                                            <Image src={`/Svg/${logoName}`} fill alt="img" />
                                        </Fade>
                                    </div>
                                )
                            })
                        }
                    </Fade>
                </div>
            </div>
        </div>
    )
}