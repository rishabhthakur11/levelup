"use client"
import Footer from "@/components/LandingpageComponents/Footer/Footer";
import HeroSection from "@/components/LandingpageComponents/HeroSection/HeroSection";
import Apply from "@/components/LandingpageComponents/LearningSection/Apply";
import Grow from "@/components/LandingpageComponents/LearningSection/Grow";
import Learn from "@/components/LandingpageComponents/LearningSection/Learn";
import LogoCloud from "@/components/LandingpageComponents/LogoCloud/LogoCloud";
import Navbar from "@/components/LandingpageComponents/NavBar/Navbar";
import SignInOptions from "@/components/LandingpageComponents/SignInOptions/SignInOptions";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";



export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[]);

  return (
    <main className="bg-backgroundColor h-fit w-full">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-up" className="mt-12 lg:mt-44">
        <LogoCloud />
      </div>
      <div className="mx-auto">
        <Learn />
        <Apply />
        <Grow />
      </div>
      <div data-aos="fade-up">
        <SignInOptions />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
