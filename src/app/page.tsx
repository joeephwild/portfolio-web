"use client";
import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <Header />
      <div>
        <About />
      </div>
    </div>
  );
}
