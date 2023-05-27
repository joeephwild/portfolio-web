import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import StarWrapper from "@/hoc/StarWrapper";
import { styles } from '../styles'

type Props = {
  index: number;
  title: string;
  icon: any;
};

type Size = {
    max: number
    scale: number
    speed: number
}

const ServiceCard: React.FC<Props> = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full w">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full green-pink-gradient shadow-sm p-[1px] rounded-[20px] shadow-[#D5FF40]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <section id="about">
      <motion.div variants={textVariant()} className="flex-col mt-[10px] w-full md:flex ">
        <h1 className={styles.sectionSubText}>
          Overview
        </h1>
        <h2 className={styles.sectionHeadText}>
          Hello
        </h2>
      </motion.div>
      <div className="mx-3">
        <div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[14px] lg:text-[16px] ml-9 font-bold font-Nunito-Black mt-[20px]"
          >
            I am Joseph. Over the past few months, I`ve been building projects
            ranging from marketing websites to complex solutions and enterprise
            apps with a focus on fast, elegant, and accessible user experiences.
            Currently, in my spare time, I enjoy experimenting with new Web3
            development tools while vibing to some cool afrobeats music or
            playing basketball at the local basketball court with my teammates.
            I also enjoy socializing on Twitter and speaking on Twitter Spaces.
          </motion.p>
        </div>
      </div>
      <div className="mt-20 grid md:grid md:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default StarWrapper(About, "about");