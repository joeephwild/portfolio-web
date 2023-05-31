import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import StarWrapper from "@/hoc/StarWrapper";
import { projects } from "@/constants";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { github } from "@/assets";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: any;
  image: any;
  source_code_link: any;
  live: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live,
}: Props) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary bg-blue-60 p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div
              onClick={() => window.open(live, "_blank")}
              className="cursor-pointer"
            >
              <FaArrowRight size={25} />
            </div>
          </div>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "spring", 0.1, 1)}
          className="mt-3 text-[#fff] xsm:mx-2 xsm:text-left text-[17px] tracking-tight font-Nunito-Black xsm:text-sm font-light max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Also some of the project below are
          works where i only worked as smart contract developer for projects
          during hackathons.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid md:grid gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(Skills, "work");
