import { useEffect, useRef } from "react"

interface popoverComponentPropType {
    isOpen: boolean,
    setIsOpen: Function
}

export const PopoverComponent: React.FC<popoverComponentPropType> = ({ isOpen, setIsOpen }) => {
    useEffect(() => {
        if (isOpen && popoverRef.current) {
            popoverRef.current.style.top = `${window.scrollY}px`;
        }
        addEventListener("scroll", () => {
            setIsOpen(!isOpen)
        })
    }, [isOpen])

    const popoverRef = useRef<HTMLDivElement>(null)

    return (
        <div className="absolute flex items-center justify-center bg-[#1b1818a9] h-[100vh] left-0 right-0 z-50 bottom-0" ref={popoverRef}>
            <div className="w-full bg-white h-[600px]">

            </div>
        </div>
    )
}