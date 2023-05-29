import {
  backend,
  carrent,
  creator,
  filmedia,
  jobit,
  mobile,
  netflix,
  token,
  tripguide,
  web,
} from "@/assets";
import { alchemy, css, figma, git, hardhat, html, javascript, reactjs, redux, soldity, tailwindcss, threejs, typescript } from "@/assets/tech";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

type Service = {
  title: string;
  icon: any;
};

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Alchemy",
    icon: alchemy,
  },
  {
    name: "Solidity",
    icon: soldity,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
];

export const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Smart Contract Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

export const projects = [
  {
    name: "Filmedia",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: filmedia,
    source_code_link: "https://github.com/joeephwild/filedia",
    live: "https://filmedia-app.vercel.app/"
  },
  {
    name: "Token Wordle",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
    ],
    image: token,
    source_code_link: "https://github.com/joseephwild/token-wordle",
    live: "https://token-wordle.vercel.app/"
  },
  {
    name: "Netflix",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/joeephwild/",
    live: "https://netflix-clone-main-seven.vercel.app/"
  },
  {
    name: "Fluently",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live: ""
  },
  {
    name: "Netflix",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    live: ""
  },
  {
    name: "Crowdfunding",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live: ""
  },
];
