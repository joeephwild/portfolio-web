import React from "react";
import { motion } from "framer-motion";
import ComputerCanvas from "./canvas/ComputerCanvas";

const Header = () => {
  return (
    <div className="w-full mt-[20%] h-screen sm:mt-[10%] min-h-screen mx-3 mix-blend-difference  bg-no-repeat bg-center relative">
      <p className="text-[16px] mt-[204px] font font-normal leading-[24px] min-w-[333px] tracking-widest max-[144px]">
        Interactive front-end/Blockchain developer with full-stack capabilities
        based in Lagos, Nigeria. Passionate about creating memorable digital
        experiences through dynamic and engaging user interfaces. Let`s work
        together to bring your project to life!
      </p>
      <h2 className="font-black text-[30px] mt-[104px] sm:text-[27px] text-bodygreen  font-Nunito-Black leading-[32.74px]">
        FULL-STACK ETHEREUM <br className="md:hidden block" /> DEVELOPER.
      </h2>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom- w-full flex justify-center items-center">
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
    </div>
  );
};

export default Header;
