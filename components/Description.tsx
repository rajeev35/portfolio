"use client";

import React from "react";
import BlurFade from "./magicui/blur-fade";
import { ArrowUp } from "lucide-react";

const Description = () => {
  return (
    <div className="pt-10 lowercase text-sm md:text-base">
      <BlurFade delay={1}>
        <p>
          My coding journey kicked off when I was 9 years old. I began with
          block-based coding on websites like Code.org and Scratch. Eventually,
          I gained interest in web development and used online resources such as
          YouTube and Udemy to learn HTML, CSS, and JavaScript. A few years
          later, when I was 11, I got my first MacBook and wanted to learn iOS
          development, so I self-learned{" "}
          <a
            href="https://www.swift.org/"
            className="underline transition-all hover:text-[#005BE7] group"
            target="_blank"
          >
            Swift
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#005BE7"
              width={20}
            />
          </a>{" "}
          and SwiftUI. Fast forward to when I was about to turn 13, I found out
          about the{" "}
          <a
            href="https://developer.apple.com/swift-student-challenge/"
            className="underline transition-all hover:text-blue-500 group"
            target="_blank"
          >
            Swift Student Challenge
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#3b82f6"
              width={20}
            />
          </a>{" "}
          and I started developing an offline app for it. When I submitted it, I
          thought I had a very slim chance of being one of the 350 winners, but
          I made it! I even got an offer from Apple to attend{" "}
          <a
            href="https://developer.apple.com/wwdc24/"
            className="underline transition-all hover:text-blue-500 group"
            target="_blank"
          >
            WWDC24
            <ArrowUp
              className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
              color="#3b82f6"
              width={20}
            />
          </a>{" "}
          in-person. It was a very unique experience in Cupertino, meeting many
          new people. Right now, I am continuing to build more projects and
          learn new skills such as Next.js and Python.
        </p>
      </BlurFade>
    </div>
  );
};

export default Description;
