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
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
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
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  
];
