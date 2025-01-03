import { Github01Icon, Linkedin01Icon } from "hugeicons-react";
import React from "react";
import Languages from "./about-section/languages";

const Education = () => {
  const educationData = [
    {
      school: "Advanced College of Engineering and Management",
      degree: "Bachelor of Engineering - BE, Computer Engineering",
      duration: "2021 - 2025",
    },
    {
      school: "Kathmandu Model Secondary School",
      degree: "High School Diploma, Physical Sciences",
      duration: "2018 - 2021",
    },
    {
      school: "St. Francis School, Pokhara",
      degree: "SEE",
      duration: "2017 - 2018",
    },
  ];

  return (
    <div className="education-content-text mt-32">
      <p className="text-6xl font-bold flex items-center w-full text-neutral-300">
        Education<span className="text-primary">.</span>
        <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
      </p>

      <section id="education" className="mb-8">
        <div className="space-y-4 mt-28">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-[#27272a] p-4 rounded shadow">
              <h3 className="font-semibold text-lg text-gray-100">
                {edu.school}
              </h3>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
