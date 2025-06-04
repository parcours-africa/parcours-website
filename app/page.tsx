import FaqSection from "./components/FaqSection";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import OverViewSection from "./components/OverViewSection";
import TeamSection from "./components/TeamSection";


export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen max-w-screen overflow-hidden text-white">
      <HeroSection/>
      <OverViewSection/>
      <FeatureSection/>
      <TeamSection/>
      <FaqSection/>
    </div>
  );
}
