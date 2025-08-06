import About from "@/Components/About";
import GetInTouch from "@/Components/GetInTouch";
import HeroComponent from "@/Components/HeroComponent";
import Services from "@/Components/Services";
import Technology from "@/Components/Technology";
import WhyChoseUs from "@/Components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <Services/>
      <About/>
      <Technology/>
      <WhyChoseUs/>
      <GetInTouch/>
      
    </div>
  );
}
