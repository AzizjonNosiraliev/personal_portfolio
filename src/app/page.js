import Hero from "@/sections/Hero";
import Navbar from '@/components/Navbar'
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    // Main
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"> 
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  );
}

