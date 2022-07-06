import React from "react";

import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import javascript from "../assets/img/skills/javascript.png";
import reactImage from "../assets/img/skills/react.png";
import nextjs from "../assets/img/skills/nextjs.png";
import graphql from "../assets/img/skills/graphql.png";
import git from "../assets/img/skills/git.png";
import tailwind from "../assets/img/skills/tailwind.png";
import figma from "../assets/img/skills/figma.png";
import node from "../assets/img/skills/node.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: git,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 9,
        src: figma,
        title: "Figma",
        style: "shadow-gray-400",
      },
      {
        id: 10,
        src: node,
        title: "Node",
        style: "shadow-gray-400",
      },
  ];

  return (
    <div
      id="skills"
      className="xl:h-[100vh] flex items-center bg-primary xl:bg-cover xl:bg-center xl:bg-no-repeat py-32 xl:py-0 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  p-2  text-center">
            Skills
          </p>
          <p className="py-6">Soy desarrollador Front-end con más de 2 años de experiencia en desarrollo web, experiencia en Javascript, Reactjs.
Me fascina el desarrollo web, trabajando con libreria como Reactjs y el uso de Framework como TailwindCSS.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;




