"use client";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { motion } from "framer-motion";

// Image configuration - easily editable
const images = [
  {
    path: "/IMG_1847.jpg",
    width: { desktop: 200, mobile: 400 },
    height: { desktop: 200, mobile: 400 },
    alt: "StartUp MahaKumbh, 2025",
    rotation: -5,
  },
  {
    path: "/IMG_1848.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Raasa Karts, 2025",
    rotation: 3,
  },
  {
    path: "/IMG_1858.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Microsoft, 2025",
    rotation: -4,
  },
  {
    path: "/IMG_1849.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Setup, 2024",
    rotation: -2,
  },
  {
    path: "/IMG_1850.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Nap Tap Go, 2024",
    rotation: 2,
  },
  {
    path: "/IMG_1851.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "GDSC WOW, 2023",
    rotation: -4,
  },
  {
    path: "/IMG_1852.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "GDSC WOW, 2023",
    rotation: 1,
  },
  {
    path: "/IMG_1853.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Meet ryan swift",
    rotation: -3,
  },
  {
    path: "/IMG_1854.jpg",
    width: { desktop: 180, mobile: 300 },
    height: { desktop: 260, mobile: 420 },
    alt: "Geeks for Geeks",
    rotation: 4,
  },

];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through images with no manual interruption
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 ml-auto mr-auto flex flex-col md:flex-row gap-10 items-center">
      {/* Text Introduction */}
      <div>
        <BlurFade delay={0.25}>
          <h1 className="text-left md:text-5xl text-3xl">
            hey! i&apos;m rajeev.
          </h1>
        </BlurFade>
        <BlurFade delay={0.5}>
          <h1 className="text-left md:text-3xl text-md text-gray-400">
            a software engineer who likes to build things.
          </h1>
        </BlurFade>
      </div>

      {/* Floating Polaroid Images - No Manual Controls */}
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        {images.map((image, index) => (
          <motion.div
            key={image.path}
            className="absolute origin-center"
            initial={{
              rotate: image.rotation,
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              rotate: image.rotation,
              scale: index === activeIndex ? 1 : 0.8,
              opacity: index === activeIndex ? 1 : 0,
              zIndex: index === activeIndex ? 10 : 0,
              top: `${index * 5}px`,
              left: `${index * 5}px`,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              opacity: { duration: 0.5 },
            }}
          >
            <div className="bg-white p-3 shadow-lg transform transition-all hover:shadow-xl">
              <Image
                src={image.path}
                alt={image.alt}
                width={image.width.desktop}
                height={image.height.desktop}
                className="w-full h-auto"
                priority
              />
              <div className="mt-2 text-center text-sm text-gray-700 font-handwriting">
                {image.alt}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
