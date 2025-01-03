import { ProjectCard } from "./projectCArd";

const projects = [
  {
    title: "Image-to-Recipe Generator App",
    imageSrc: "/img-to-recipe.png",
    imageAlt: "An image of the Paint.app project.",
    technologies: ["ML", "Flask", "Python"],
    description:
      "A recipe generator app that leverages attention mechanisms to provide personalized recipe suggestions. Built using the Flash web library, this app offers real-time recommendations based on user preferences and ingredient availability.",
    githubUrl: "https://github.com/shresthasusan/img2recipe",
    liveUrl: "https://github.com/shresthasusan/img2recipe",
  },
  {
    title: "Hey-Job",
    imageSrc: "/hey-job.png",
    imageAlt: "An image of the Paint.app project.",
    technologies: ["MongoDB", "Next.js", "Firebase"],
    description:
      "A web application built with Next.js, React, and Firebase. It aims to provide a platform for freelancers and clients to connect, post jobs, and manage projects. The project includes various features such as user authentication, job posting, project management, and a dashboard for both freelancers and clients.",
    githubUrl: "https://www.github.com/shresthasusan/hey-job",
    liveUrl: "https://www.hey-job.vercel.app",
  },
  {
    title: "Hult at acem",
    imageSrc: "/hultatacem.jpeg",
    imageAlt: "An image of the Paint.app project.",
    technologies: ["Flutter", "MUI", "Python", "FastAPI"],
    description: "webpage for Hult at acem",
    githubUrl: "https://www.github.com/hultatacem/hultatacem",
    liveUrl: "https://www.hultatacem.com",
  },
  // Add more projects here...
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mt-32">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
