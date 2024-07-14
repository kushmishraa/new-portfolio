interface skillsChipPropTrypes {
    name: string,
    logo: string
}
import Image from "next/image"

export const SkillsChip: React.FC<skillsChipPropTrypes> = ({ name, logo }) => {
    return (
        <div className="bg-black p-[5px] flex items-center rounded gap-1 text-white">
            <div className="relative w-[20px] h-[20px]">
                <Image src={`/Svg/${logo}`} fill alt="img" />
            </div>
            <div className="text-[12px]">
                <h2>{name}</h2>
            </div>
        </div>
    )
}