import HeroSection from "@/components/LandingpageComponents/HeroSection/HeroSection";
import Apply from "@/components/LandingpageComponents/LearningSection/Apply";
import Grow from "@/components/LandingpageComponents/LearningSection/Grow";
import Learn from "@/components/LandingpageComponents/LearningSection/Learn";
import LogoCloud from "@/components/LandingpageComponents/LogoCloud/LogoCloud";
import Navbar from "@/components/LandingpageComponents/NavBar/Navbar";

export default function Home() {
  return (
    <main className="bg-backgroundColor h-fit w-full">
      <div className="max-w-7xl mx-auto sticky">
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div className="mt-12 lg:mt-32">
        <LogoCloud />
      </div>
      <div className="">
        <Learn />
        <Apply />
        <Grow />
      </div>
    </main>
  );
}
