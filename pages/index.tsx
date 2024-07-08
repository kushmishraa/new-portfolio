import Header from "@/Components/Header";
import LandingPage from "../Components/LandingPage";
import { useState } from "react";

export default function Home() {

  const [showHeader, setShowHeader] = useState(false)

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <Header />
      <div className="absolute z-0 bottom-0">
        <video className="opacity-[0.6] h-[100%] max-w-[none]" autoPlay loop muted>
          <source src="/video/website_background_loop.mp4"></source>
        </video>
      </div>
      <LandingPage />
    </div>
  );
}
