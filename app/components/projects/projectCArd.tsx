import Image from "next/image";
import { ExternalDriveIcon, Github01Icon } from "hugeicons-react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  imageSrc,
  imageAlt,
  technologies,
  description,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
      <div className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="w-full absolute bottom-0 left-0 transition-all rounded"
        />
      </div>
      <div className="mt-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <h4 className="font-bold text-lg shrink-0 max-w-full md:max-w-[calc(100%_-_150px)]">
            {title}
          </h4>
          <div className="hidden md:block w-full h-[1px] bg-zinc-600"></div>
          <div className="flex gap-4">
            <a
              target="_blank"
              rel="nofollow"
              href={githubUrl}
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <Github01Icon size={20} />
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href={liveUrl}
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
            >
              <ExternalDriveIcon size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-indigo-300 my-3">
          {technologies.join(" • ")}
        </div>
        <p className="text-zinc-300 leading-relaxed">
          {description}{" "}
          <span className="inline-block text-sm text-indigo-300 cursor-pointer">
            Learn more &gt;
          </span>
        </p>
      </div>
    </div>
  );
}
