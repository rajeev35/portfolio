"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SocialLink {
  link: string;
  image: string;
  handle?: string;
}

const social: SocialLink[] = [
  {
    link: "https://x.com/madebyshaurya",
    image: "/x.svg",
  },
  {
    link: "https://github.com/madebyshaurya",
    image: "/gh.png",
  },
  {
    link: "mailto:shaurya50211@gmail.com",
    image: "/mail.svg",
    handle: "shaurya50211@gmail.com",
  },
];

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="pt-10 mx-auto max-w-4xl text-center">
      <BlurFade delay={0.5} inView>
        <h1 className="text-center text-2xl md:text-4xl">contact</h1>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <h1 className="text-center pb-10 text-gray-400">
          fastest way to reach me is email or x (twitter) dm
        </h1>
      </BlurFade>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        {social.map((e, index) => (
          <Link href={e.link} target="_blank" key={index}>
            <BlurFade delay={1 + index * 0.3} inView>
              <span
                className="flex items-center w-[240px] p-2 justify-evenly rounded-md transition-all border-black border group relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center justify-center transition-transform duration-300 ${
                    hoveredIndex === index
                      ? "translate-x-[-100%] opacity-0"
                      : ""
                  }`}
                >
                  <Image alt="social" src={e.image} height={30} width={26} />
                </div>
                <div
                  className={`absolute flex items-center justify-center transition-transform duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-[30%]"
                      : "opacity-0 translate-x-0"
                  }`}
                >
                  <ArrowRight className="text-4xl" />
                </div>
                <h1
                  className={`text-base transition-transform duration-300 ${
                    hoveredIndex === index
                      ? "translate-x-[100%] opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {e.handle ? e.handle : "@madebyshaurya"}
                </h1>
              </span>
            </BlurFade>
          </Link>
        ))}
      </div>
    </div>
  );
}
