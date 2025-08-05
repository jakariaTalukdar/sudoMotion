import HeroComponent from "@/Components/HeroComponent";
import Services from "@/Components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <Services/>
    </div>
  );
}
