import Image from "next/image"
import { useState } from "react"
import { SkillsChip } from "./SkillsChip"
import { PopoverComponent } from "./PopoverComponent"

export const Project = () => {

    const [dialogVisible, setDialogueVisible] = useState(false)

    return (
        <>
            <div className="group/project w-[400px] flex flex-col relative  bg-[#EBF4F6] z-10 shadow-lg rounded-lg">
                <div className="flex flex-col transition-all delay-75 group-hover/project:opacity-[1]">
                    <div className="p-5 flex flex-col gap-5">
                        <div><h2 className="font-semibold">E commerce Website</h2></div>
                        <div className="flex flex-wrap gap-2">
                            <SkillsChip name="React JS" logo="React-icon.svg" />
                            <SkillsChip name="GitHub" logo="github-icon-2.svg" />
                            <SkillsChip name="React JS" logo="React-icon.svg" />
                            <SkillsChip name="SCSS" logo="sass-lang-ar21.svg" />
                            <SkillsChip name="SCSS" logo="sass-lang-ar21.svg" />
                            <SkillsChip name="GitHub" logo="github-icon-2.svg" />
                        </div>
                        <div className="text-[18px]">
                            Developed the online E-commerce website for selling custom clothing brand
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="ml-auto w-1/2 border-2 text-[16px] 
                        rounded transition delay-75 hover:bg-[#37B7C3] 
                        hover:text-[white] text-black border-[#37B7C3] p-2"
                            onClick={() => setDialogueVisible(!dialogVisible)}
                        >
                            <div className="text-center">Read More</div>
                        </div>
                    </div>
                </div>
            </div >
            {dialogVisible && <PopoverComponent setIsOpen={setDialogueVisible} isOpen={dialogVisible} />}
        </>
    )
}