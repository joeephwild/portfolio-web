import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import StarWrapper from "@/hoc/StarWrapper";
import { styles } from "../styles";

type Props = {
  index: number;
  title: string;
  icon: any;
  options: Options;
};

interface Options {
  max: number;
  scale: number;
  speed: number;
}

const ServiceCard: React.FC<Props> = ({ index, title, icon, options }) => (
  <Tilt className="xs:w-[250px] w-full" options={options}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-full green-pink-gradient shadow-sm p-[1px] rounded-[20px]"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>Hello</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#ffff] text-[17px] xsm:text-[12px] xsm:max-w-2xl max-w-3xl leading-[30px]"
      >
        I am Joseph. Over the past few months, I`ve been building projects
        ranging from marketing websites to complex solutions and enterprise apps
        with a focus on fast, elegant, and accessible user experiences.
        Currently, in my spare time, I enjoy experimenting with new Web3
        development tools while vibing to some cool afrobeats music, when not
        busy i love playing basketball at the local basketball court with my
        teammates. I also enjoy socializing on Twitter and speaking on Twitter
        Spaces. <br />
        I have an impressive record of accomplishments in various
        hackathons. With a natural inclination for innovative problem-solving,
        I thrive in high-pressure, fast-paced environments, consistently
        delivering exceptional solutions within tight deadlines.
      </motion.p>

      <div className="my-20 grid grid-cols-1 md:grid-cols-3 mx-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About, "about");
