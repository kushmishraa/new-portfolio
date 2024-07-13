import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const ExperienceSection = () => {
  return (
    <div className="section flex flex-col overflow-hidden gap-[10px]">
      <div className="flex flex-col">
        <Fade>
          <h1 className="font-bold">Experience</h1>
        </Fade>
      </div>

      <div className="flex flex-col gap-[10px]">
        <Fade direction="right">
          <div className="flex gap-[10px]">
            <div className="min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px] relative">
              <Image src={"/logo/musafirdotcom_logo.jpeg"} fill alt="logo" />
            </div>
            <div className="flex flex-col md:w-1/2">
              <div className="flex flex-col md:flex-row md:items-center gap-[5px]">
                <div className="text-[20px] font-semibold"><h2>Musafir.com |</h2></div>
                <div className="text-[16px]">07/2023 - Present</div>
              </div>
              <div className="text-[16px]">Software Engineer</div>
              <div className="w-full">
                <ul>
                  <li className="flex gap-4 text-[15px]">
                    <div>-</div>
                    <div>
                      <p>Given knowledge transfer to new interns that joined the company Given knowledge transfer to new interns that joined the company Given knowledge transfer to new interns that joined the company</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="right">
          <div className="flex gap-[10px]">
            <div className="min-w-[60px] max-w-[60px] max-h-[60px] min-h-[60px] relative">
              <Image src={"/logo/musafirdotcom_logo.jpeg"} fill alt="logo" />
            </div>
            <div className="flex flex-col md:w-1/2">
              <div className="flex flex-col md:flex-row md:items-center gap-[5px]">
                <div className="text-[20px] font-semibold"><h2>Musafir.com |</h2></div>
                <div className="text-[16px]">08/2022 - 04/2023</div>
              </div>
              <div className="text-[16px]">Software Engineer Intern</div>
              <div className="w-full">
                <ul>
                  <li className="flex gap-4 text-[15px]">
                    <div>-</div>
                    <div>
                      <p>Given knowledge transfer to new interns that joined the company Given knowledge transfer to new interns that joined the company Given knowledge transfer to new interns that joined the company</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
