"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className='relative  z-0 bg-primary'>
      <div>
        <Header />
      </div>
        <About />
        <Tech />
        <Works />
        <Contact />
    </div>
  );
}
