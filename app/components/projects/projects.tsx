import React from "react";
import ProjectGrid from "./projectGrid";

const Projects = () => {
  return (
    <div className="projects ">
      <div className="text-6xl font-bold flex items-center w-full text-neutral-300  before:h-[1px] before:bg-accent before:content-[''] before:mr-5 before:flex-1 before:w-full before:align-middle  before:flex">
        {/* <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span> */}
        <p className="w-fit">My Projects</p>
        <span className="text-primary w-fit ">.</span>
      </div>
      <ProjectGrid />
    </div>
  );
};

export default Projects;
