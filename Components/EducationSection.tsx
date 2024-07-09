import Image from "next/image"
import { Fade } from "react-awesome-reveal"

export const EducationSection = () => {
    return (
        <div className="p-[20px] flex flex-col overflow-hidden gap-[10px]">
            <div className="flex flex-col">
                <Fade><h1 className="font-bold">Experience</h1></Fade>
            </div>


            <div className="flex flex-col gap-[10px]">
                <Fade direction="right">
                    <div className="flex gap-[10px]">
                        <div className="w-[60px] h-[60px] relative">
                            <Image src={"/logo/musafirdotcom_logo.jpeg"} fill alt="logo" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-[5px]">
                                <div className="text-[20px] font-semibold">Musafir.com |</div>
                                <div className="text-[16px]">07/2023 - Present</div>
                            </div>
                            <div className="text-[16px]">Software Engineer</div>
                        </div>
                    </div>
                </Fade>

                <Fade direction="right">
                    <div className="flex gap-[10px]">
                        <div className="w-[60px] h-[60px] relative">
                            <Image src={"/logo/musafirdotcom_logo.jpeg"} fill alt="logo" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-[5px]">
                                <div className="text-[20px] font-semibold">Musafir.com |</div>
                                <div className="text-[16px]">07/2023 - Present</div>
                            </div>
                            <div className="text-[16px]">Software Engineer</div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}