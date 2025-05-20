"use client";

import BlurFade from "@/components/magicui/blur-fade";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="mt-10">
      <BlurFade delay={1.5}>
        <h1 className="text-center text-2xl md:text-4xl">projects</h1>
      </BlurFade>
      <BlurFade delay={1.75}>
        <h1 className="text-center pb-10 text-gray-400">
          here are a few projects i&apos;ve worked on
        </h1>
      </BlurFade>
      <div className="grid md:grid-cols-2 grid-cols-1 mr-auto ml-auto gap-4">
        <BlurFade delay={0.25} inView>
          <ProjectCard
            tags={[
              "Php",
              "Laravel",
              "Sql",
              "firebase",
              "React Native",
              "AWS",
            ]}
            tagColors={{
              tailwind: "#0CA5E9",
              nextjs: "#000000",
              firebase: "#FFC403",
              stripe: "#635BFF",
              "open ai": "#23AB86",
            }}
            imageSrc="/raasa.jpeg"
            liveLink="https://raasakarts.com/"
            title="Raasa Karts"
            description="Raasa Karts is an Indian startup that brings street food vendors onto a digital platform."
          />
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <ProjectCard
            tags={["swift"]}
            tagColors={{
              swift: "#FA7343",
            }}
            imageSrc="/fizzix.png"
            githubLink="https://github.com/madebyshaurya/FizzixApp"
            video="https://youtu.be/xjSNIMTSfcA?si=H034mcxzXIqr2pvT"
            title="Fizzix"
            description="fizzix helps you learn the 3 laws of motion by isaac newton in an interactive way. this was also the swift student challenge '24 winner."
          />
        </BlurFade>
      </div>
    </div>
  );
}
