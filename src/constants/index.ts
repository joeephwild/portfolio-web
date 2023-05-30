import {
  backend,
  carrent,
  creator,
  filmedia,
  fluently,
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
      "Filmedia is a cutting-edge Web3 content sharing platform that empowers creators to showcase their talents and earn money from their work.",
    tags: [
      {
        name: "React-js",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
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
      "A web3 game platform that utilizes the fun game of wordle that allow users to stake and earn tokens while playing such addictive game.",
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
      "Web application that enables users to watch movie trailer of every kind and see every latest movie releases.",
    tags: [
      {
        name: "React-js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "Movie-Api",
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
      "Fluently is a decentralized language exchange platform that uses Huddle01's video SDK to allow users to practice speaking a foreign language with native speakers from around the world.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "green-text-gradient",
      },
      {
        name: "Filecoin Testnet",
        color: "pink-text-gradient",
      },
    ],
    image: fluently,
    source_code_link: "https://github.com/joeephwild/fluently-v2/tree/master/fluently-contract",
    live: "https://fluently-app.vercel.app/"
  },
  {
    name: "Errand_App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Hardhat",
        color: "green-text-gradient",
      },
      {
        name: "Chai",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/joeephwild/decentralized_errand/tree/develop/errand",
    live: "https://decentralized-errand.vercel.app/"
  },
  {
    name: "Portfolio Website",
    description:
      "A Portfolio website built with threejs and nextjs to showcase some of works after a long time of finding a good idea on one.",
    tags: [
      {
        name: "Next-js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "Three-js",
        color: "pink-text-gradient",
      },
      {
        name: "React-three-fiber",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live: ""
  },
];
