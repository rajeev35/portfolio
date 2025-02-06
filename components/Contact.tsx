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
    <div className="mt-10 mx-auto max-w-4xl text-center">
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
            <BlurFade delay={1 + index * 0.25} inView>
              <span
                className="flex items-center w-[240px] p-3 justify-around rounded-lg transition-all duration-500 ease-in-out border border-black/20 hover:border-black/80 hover:shadow-lg group relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center transition-all duration-500 ease-in-out transform ${
                    hoveredIndex === index
                      ? "-translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <Image
                    alt="social"
                    src={e.image}
                    height={24}
                    width={24}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h1
                  className={`text-base font-medium transition-all duration-500 ease-in-out transform ${
                    hoveredIndex === index
                      ? "-translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  {e.handle ? e.handle : "@madebyshaurya"}
                </h1>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    Visit
                    <ArrowRight className="w-4 h-4 animate-pulse" />
                  </span>
                </div>
              </span>
            </BlurFade>
          </Link>
        ))}
      </div>
    </div>
  );
}
