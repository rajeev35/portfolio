// components/ProjectCard.tsx
"use client";
import { FC, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm h-[28rem] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out m-4 flex flex-col transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          className={`object-cover transition-transform duration-700 ease-in-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
        />
      </div>
      <div className="px-6 py-4 flex-grow overflow-auto bg-white/80 backdrop-blur-sm">
        <div className="font-bold text-xl mb-2 transition-colors duration-300">
          {title}
        </div>
        <p className="text-gray-700 text-base transition-colors duration-300">
          {description}
        </p>
        <div className="mt-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold mr-2 mb-2 px-2 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {tagColors[tag] && (
                <span
                  className="w-2 h-2 rounded-full mr-2 transition-transform duration-300"
                  style={{ backgroundColor: tagColors[tag] }}
                ></span>
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        {githubLink && (
          <a
            href={githubLink}
            className="flex items-center text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            <span>GitHub</span>
          </a>
        )}

        {liveLink && (
          <a
            href={liveLink}
            className="flex items-center text-green-500 hover:text-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MousePointerClick className="w-5 h-5 mr-2 transition-transform duration-300" />
            <span>Live Demo</span>
          </a>
        )}

        {video && (
          <a
            href={video}
            className="flex items-center text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-6" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
