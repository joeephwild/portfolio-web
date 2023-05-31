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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
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
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="xsm:w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      jfjfjfjfjfjfjffj333333
      <div className="w-full flex">
       
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(Works, "work");
