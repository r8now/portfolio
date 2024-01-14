import { nanoid } from 'nanoid';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
  FaGithub,
  
} from "react-icons/fa";
import { SiCsharp, SiDotnet, SiMysql, SiTailwindcss } from "react-icons/si";


export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#user_name", text: "Contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & junior CSS skills, creating visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Comfortable in JavaScript, building interactive and dynamic web applications with a focus on user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Know basics in React, developing front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "Wordpress",
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: "Comfortable working with wordpress CMS, adding custom CSS, but have also built a custom template from scratch with PHP",
  },
  {
    id: nanoid(),
    title: "PHP",
    icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
    text: "Have experience with PHP after building custom template for wordpress theme and also in creating REST-API",
  },
  {
    id: nanoid(),
    title: "Github",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
    text: "Beginner in Github, know basics and able to save my work and creating branches and learning real world work scenarios",
  },
  {
    id: nanoid(),
    title: "C#",
    icon: <SiCsharp className="h-16 w-16 text-emerald-500" />,
    text: "Know basics in C# ",
  },
  {
    id: nanoid(),
    title: ".Net",
    icon: <SiDotnet className="h-16 w-16 text-emerald-500" />,
    text: "Know basics in .NET finished course in .NET in school by building pages with razor pages and microsoft SQL. ",
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Experience with MySQL when building custom templates for wordpress, but also creating database for small projects.",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Beginner in Tailwind, learning to be efficient in using Tailwind.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/images/barnochomsorg.png",
    url: "https://barnochomsorg.se/bli-jourhem-familjehem/",
    github: "",
    title: "First project",
    text: "In this project i added custom css, fixed buggs and made the whole site responsive for mobiles. This page was built with wordpress and Elementor page builder",
  },
  {
    id: nanoid(),
    img: "/images/instaplatt.png",
    url: "https://instaplatt.se/",
    github: "",
    title: "Second project",
    text: "I was the project manager 90% when building and finishing this site, my job was to check that the designer was using the correct standards and also creating this site to be SEO friendly and optimized.",
  },
  {
    id: nanoid(),
    img: "/images/myportfolio.png",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/r8now/portfolio",
    title: "Third project",
    text: "This was built with Vite, Tailwind css and React",
  },
  {
    id: nanoid(),
    img: "/images/bygget.png",
    url: "https://brilliant-kringle-064f51.netlify.app/",
    github: "#/private repo",
    title: "Fourth project",
    text: "This was built with Vite, Tailwind css and React, i made a copy of a site and added pages to it and made it responsive for mobiles.",
  },
  {
    id: nanoid(),
    img: "/images/betterversion.png",
    url: "https://betterversion.netlify.app/",
    github: "#/private repo",
    title: "Fifth project",
    text: "This is built with Vite, Tailwind css and React, this is an ongoing project i am collaborating with a friend. A website to help people with loosing weight and getting in shape.",
  },
  {
    id: nanoid(),
    img: "/images/cms.png",
    url: "https://studenter.miun.se/~hosm2000/writeable/wordpress/",
    github: "https://github.com/r8now/CMS_Project",
    title: "CMS project",
    text: "Build in 2022 focus on creating a custom template for wordpress from scratch and also creating a REST-API with PHP and MySQL, you are able to upload pages, posts and also images to the site.",
  },
];
