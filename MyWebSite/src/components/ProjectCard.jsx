/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";

export default function ProjectCard({ img, name, desc, skills, link, github }) {
  return (
    <div className=" lg:w-[955px] bg-white dark:bg-dark-dbgri rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-card-shadow">
      <img
        src={img}
        alt=""
        className="md:h-[360px] md:w-[360px] w-[200px] md:rounded-l-xl pt-4 md:pt-0"
      />
      <div className="flex flex-col gap-6 p-8">
        <h2 className="font-bold text-2xl md:text-3xl text-center md:text-left text-light-purple dark:text-dark-pclil">
          {name}
        </h2>
        <div className="dark:text-white">{desc}</div>
        <div className="flex gap-2 justify-center md:justify-normal">
          {skills.map((skill, index) => (
            <Badge key={index} text={skill} />
          ))}
          {/* <Badge text="redux" />
          <Badge text="vercel" /> */}
        </div>
        <div className="flex gap-6 justify-center md:justify-normal">
          <a
            href={link}
            className="underline font-medium dark:text-light-green"
          >
            View Site
          </a>
          <a
            href={github}
            className="underline font-medium dark:text-light-green"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}