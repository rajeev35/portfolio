"use client";

import React from "react";
import BlurFade from "./magicui/blur-fade";
import { ArrowUp } from "lucide-react";

const Description = () => {
  return (
    <div className="pt-10 lowercase text-sm md:text-base">
      <BlurFade delay={1}>
        <p>
          Hi, I'm Rajeev Kumar, currently working as a Software Engineer at{" "}
          <a
            href="https://www.raasakarts.com"
            className="underline transition-all hover:text-blue-500 group"
            target="_blank"
          >
            @Raasakarts 
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#3b82f6"
              width={20}
            />
          </a>
          , a Shark Tank India-funded startup. I specialize in full-stack
          development with a focus on the MERN stack and have a strong passion
          for emerging technologies like{" "}
          <a
            href="https://en.wikipedia.org/wiki/Blockchain"
            className="underline transition-all hover:text-[#005BE7] group"
            target="_blank"
          >
            blockchain
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#005BE7"
              width={20}
            />
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/DevOps"
            className="underline transition-all hover:text-[#005BE7] group"
            target="_blank"
          >
            DevOps
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#005BE7"
              width={20}
            />
          </a>
          .
         
          Currently, I’m exploring how technology can transform industries and
          improve systems. I believe in the power of collaboration and am always
          looking for opportunities to connect with fellow professionals to
          learn and grow together.
          <br />
          <br />
          🚀 Open to exciting opportunities and conversations in the tech space!
        </p>
      </BlurFade>
    </div>
  );
};

export default Description;
