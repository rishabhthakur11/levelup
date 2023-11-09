import HeroSection from "@/components/LandingpageComponents/HeroSection/HeroSection";
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
    </main>
  );
}
