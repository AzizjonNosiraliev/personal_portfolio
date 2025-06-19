import Header from "@/sections/Header";
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-[#000000]">
      <Navbar/>
      <Header/>
    </div>
  );
}

