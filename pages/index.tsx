import LandingPage from "../Components/LandingPage";

export default function Home() {
  return (
    <div className="h-[100vh] relative">
      {/* landing page */}
      <div>
        <video className="absolute opacity-[0.5] bottom-0" autoPlay loop muted>
          <source src="/video/website_background_loop.mp4"></source>
        </video>
      </div>
      <LandingPage />
    </div>
  );
}
