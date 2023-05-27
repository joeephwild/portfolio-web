import { backend, creator, mobile, web } from "@/assets";

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
      id: "contact",
      title: "Contact",
    },
  ];

  type Service = {
    title: string,
    icon: any
  }
  
 
export  const services: Service[] = [
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
