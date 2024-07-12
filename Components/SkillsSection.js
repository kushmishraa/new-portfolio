import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { SlickCraousel } from "./SlickCraousel";
export const SkillsSection = () => {
  const skillsLogo = [
    "nextjs.svg",
    "nodejs-icon.svg",
    "github-icon-2.svg",
    "docker-tile.svg",
    "Sql_data_base_with_logo.svg",
    "React-icon.svg",
  ];

  return (
    <div className="section overflow-hidden">
      <Fade>
        <div>
          <h1>Skills</h1>
        </div>
      </Fade>

      <div className="w-full flex justify-center h-[100vh]">
        <div className="w-1/2 flex flex-col justify-center max-h-[120px] rounded-full">
          <SlickCraousel autoplay={true} dots={false} pauseOnHover={false}>
            {skillsLogo.map((logo) => {
              return (
                <div className="">
                  <div className="flex items-center justify-center w-[150px] min-h-[120px] hover:scale-[1.2]">
                    <div className="relative max-w-[70px] w-[70px] min-h-[70px] max-h-[70px]">
                      <Image src={`/Svg/${logo}`} fill alt="img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </SlickCraousel>
        </div>
      </div>
    </div>
  );
};
