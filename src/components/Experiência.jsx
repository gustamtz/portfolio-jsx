import React from "react";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import dotnet from "../assets/dotnet.png";
import mysql from "../assets/mysql.png";

const Experiencia = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-300",
    },
    {
      id: 4,
      src: node,
      title: "Node.js",
      style: "shadow-green-800",
    },
    {
      id: 5,
      src: dotnet,
      title: ".NET 6",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
      style: "shadow-cyan-200",
    },
  ];

  return (
    <div
      name="experiência"
      className="pt-14 bg-gradient-to-b from-zinc-900 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-2 border-gray-500 inline">
            Experiência
          </p>
          <p className="text-xl py-6">
            Tecnologias nas quais tenho experiência.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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

export default Experiencia;
