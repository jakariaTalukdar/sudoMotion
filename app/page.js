import About from "@/Components/About";
import HeroComponent from "@/Components/HeroComponent";
import Services from "@/Components/Services";
import WhyChoseUs from "@/Components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <Services/>
      <About/>
      <WhyChoseUs/>
      
    </div>
  );
}
