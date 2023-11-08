import HeroSection from "@/components/LandingpageComponents/HeroSection/HeroSection";
import Navbar from "@/components/LandingpageComponents/NavBar/Navbar";

export default function Home() {
  return (
    <main className="absolute bg-backgroundColor h-full w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div className="">
        <HeroSection />
      </div>
    </main>
  );
}
