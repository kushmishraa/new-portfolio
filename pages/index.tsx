import { Fade } from "react-awesome-reveal";
import LandingPage from "../Components/LandingPage";
import QuickAccess from "@/Components/QuickAccess";
import { useEffect, useRef } from "react";

export default function Home() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorHighlight = useRef<HTMLDivElement>(null);

  useEffect(() => {

    sectionRef.current && sectionRef.current.addEventListener("mousemove", function (event) {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect?.left != undefined && rect.top != undefined) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (cursorHighlight.current && x && y) {
          cursorHighlight.current.style.left = `${x}px`;
          cursorHighlight.current.style.top = `${y}px`;
          cursorHighlight.current.style.display = 'block';
        }
      }
    })
    sectionRef.current && sectionRef.current.addEventListener('mouseleave', () => {
      cursorHighlight.current && (cursorHighlight.current.style.display = 'none')
    })
  }, [])

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      <Fade triggerOnce cascade delay={4000} className="relative z-40">
        <QuickAccess />
      </Fade>
      <LandingPage />
      <div className="cursor-highlight" ref={cursorHighlight}></div>
    </div>
  );
}
