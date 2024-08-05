// components/ProjectCard.tsx

import { FC } from "react";
import Image from "next/image";
import { Github, MousePointerClick, Youtube } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  tagColors?: { [key: string]: string };
  githubLink?: string;
  liveLink?: string;
  video?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  tags,
  tagColors = {},
  githubLink,
  liveLink,
  video,
}) => {
  return (
    <div className="max-w-sm h-[28rem] rounded overflow-hidden shadow m-4 flex flex-col">
      <div className="relative w-full h-48">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={title}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4 flex-grow overflow-auto">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center bg-gray-200 text-gray-700 text-sm font-semibold mr-2 mb-2 px-2 py-1 rounded"
            >
              {tagColors[tag] && (
                <span
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: tagColors[tag] }}
                ></span>
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        {githubLink && (
          <a
            href={githubLink}
            className="flex items-center text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>GitHub</span>
          </a>
        )}

        {liveLink && (
          <a
            href={liveLink}
            className="flex items-center text-green-500 hover:text-green-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MousePointerClick className="w-5 h-5 mr-2" />
            <span>Live Demo</span>
          </a>
        )}

        {video && (
          <a
            href={video}
            className="flex items-center text-red-500 hover:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5 mr-2" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
