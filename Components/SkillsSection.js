import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { SlickCraousel } from "./SlickCraousel";
export const SkillsSection = () => {
  const skillsLogo = [
    { logo: "nextjs.svg", name: "Next JS" },
    { logo: "nodejs-icon.svg", name: "Node JS" },
    { logo: "github-icon-2.svg", name: "GitHub" },
    { logo: "docker-tile.svg", name: "Docker" },
    { logo: "Sql_data_base_with_logo.svg", name: "SQL" },
    { logo: "React-icon.svg", name: "React JS" },
    { logo: "tailwind_logo.svg", name: "TailWind CSS" },
    { logo: "Amazon_Web_Services-Logo.wine.svg", name: "AWS Essentials" },
    { logo: "HTML5_Badge.svg", name: "HTML5" }
  ];

  return (
    <div className="">
      <Fade className="section">
        <div>
          <h1>Skills</h1>
        </div>
      </Fade>
      <div className="w-full flex justify-center">
        <div className="overflow-hidden">
          <SlickCraousel autoplay pauseOnHover>
            {skillsLogo.map((skill) => {
              return (
                <div className="">
                  <div className="flex flex-col items-center justify-center w-[150px] min-h-[120px] hover:scale-[1.2]">
                    <div className="relative max-w-[70px] w-[70px] min-h-[70px] max-h-[70px]">
                      <Image src={`/Svg/${skill.logo}`} fill alt="img" />
                    </div>
                    <div className="text-[12px]">
                      {skill.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </SlickCraousel>
        </div>
      </div>
    </div >
  );
};
