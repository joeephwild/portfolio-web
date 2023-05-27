import React from "react";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/ComputerCanvas";

const Header = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="space-y-4 lg:space-y-12 mx-3">
          <p
            className={`text-white lg:w-[489px] md:text-[16px] lg:absolute lg:right-0 font-bold text-[14px] leading-[24px] font-Nunito-Black`}
          >
            Interactive front-end/Blockchain developer with full-stack
            capabilities based in Lagos, Nigeria. Passionate about creating
            memorable digital experiences through dynamic and engaging user
            interfaces. Let`s work together to bring your project to life!
          </p>
          <div className="mt-[105px]">
            <h1
              className={`font-Panchang-Extrabold text-2xl md:text-4xl lg:text-6xl lg:min-w-[900px] tracking-widest text-[#D5FF40] mt-`}
            >
              FULL-STACK <br className="lg:block " /> ETHEREUM <br className="sm:hidden block" />
              DEVELOPER
            </h1>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#D5FF40] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#D5FF40] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Header;
