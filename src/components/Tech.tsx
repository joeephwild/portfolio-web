'use client'
import StarWrapper from "@/hoc/StarWrapper";
import React from "react";
import BallCanvas from "./canvas/BallCanvas";
import Image from 'next/image'
import { technologies } from "@/constants";

const Tech = () => {
  return(
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
       <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
     );
};

export default StarWrapper(Tech, "tech");
