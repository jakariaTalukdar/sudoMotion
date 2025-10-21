import About from "@/Components/About";
import GetInTouch from "@/Components/GetInTouch";
import HeroComponent from "@/Components/HeroComponent";
import Services from "@/Components/Services";
import Technology from "@/Components/Technology";
import WhyChoseUs from "@/Components/WhyChoseUs";
import Team from "@/Components/Team";
import FAQ from "@/Components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <Services/>
      <About/>
      <Technology/>
      <Team/>
      <WhyChoseUs/>
      <FAQ/>
      <GetInTouch/>
      
    </div>
  );
}
