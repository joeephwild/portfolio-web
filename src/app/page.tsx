"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className=''>
      <div>
        <Header />
      </div>
        <About />
        <Tech />
       <Skills />
        <Contact />
    </div>
  );
}
