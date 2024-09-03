import Image from "next/image";
import Hero from "../components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "../components/Grid"
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <FloatingNav navItems=
        {navItems}
        />
      <Hero />
      
      <TechStack />
      <Experience />
      <Footer />
      
    </main>
  );
}
