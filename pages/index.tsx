import { Fade } from "react-awesome-reveal";
import LandingPage from "../Components/LandingPage";
import QuickAccess from "@/Components/QuickAccess";

export default function Home() {

  return (
    <div className="relative">
      <Fade triggerOnce cascade delay={4000} className="relative z-40">
        <QuickAccess />
      </Fade>
      <LandingPage />
    </div>
  );
}
