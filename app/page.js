import AboutSection from "@/components/About";
import AdventureSection from "@/components/AdventureSection";
import DestinationsSection from "@/components/DestinationsSection";
import DreamTripSection from "@/components/DreamTripSection";
import HeroSection from "@/components/Hero";
import PackageSection from "@/components/Package";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <HeroSection/>
    <AboutSection/>
    <PackageSection/>
    <DreamTripSection/>
    <AdventureSection/>
    <Testimonials/>
  </main>
  );
}
