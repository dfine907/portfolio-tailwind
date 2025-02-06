import { nanoid } from 'nanoid';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine, RiJavascriptLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [

  {
    id: nanoid(),
    title: 'Javascript',
    icon: <RiJavascriptLine className='h-16 w-16 text-teal-300' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'ReactJS',
    icon: <FaReact className='h-16 w-16 text-teal-300' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-teal-300' />,
    text: 'Proficiency in developing robust and scalable server-side applications with a focus on asynchronous programming.',
  },
  {
    id: nanoid(),
    title: 'NextJS',
    icon: <RiNextjsLine className='h-16 w-16 text-teal-300' />,
    text: 'Adept at building performant Next.js applications, leveraging SSR, API routes, and its powerful routing capabilities for optimal user experiences.',
  },
];

export const projects = [
  
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
  {
    id: nanoid(),
    img: 'https://res.cloudinary.com/dlqpgw2iw/image/upload/v1738342705/bullseye_lhdzjg.png',
    url: 'https://dfine907.github.io/bullseye_game/',
    github: 'https://github.com/dfine907/bullseye_game',
    title: 'Bulls Eye Game',
    text: 'Intelligent AI, seamless controls, and responsive mouse tracking combine to create an immersive fantasy adventure where every move counts.',
  },
];
