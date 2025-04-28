
import Hero from "../components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";


import dynamic from 'next/dynamic';
import { navItems } from "@/data";


export default function Home() {
  const Grid = dynamic(() => import('../components/Grid'));
  const TechStack = dynamic(() => import('@/components/TechStack'));
  const Experience = dynamic(() => import('@/components/Experience'));
  const Footer = dynamic(() => import('@/components/Footer'));




  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      
      <FloatingNav navItems=
        {navItems}
        />
      <Hero />
      <Grid />
      <TechStack />
      <Experience />
      <Footer />
      
    </main>
  );
}
