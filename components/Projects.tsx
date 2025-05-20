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
              Php: "#0CA5E9",
              Laravel: "#000000",
              firebase: "#FFC403",
              Sql: "#635BFF",
              "React Native": "#23AB86",
              AWS: "#635BFF",
            }}
            imageSrc="/raasa.jpeg"
            liveLink="https://raasakarts.com/"
            title="Raasa Karts"
            description="Raasa Karts is an Indian startup that brings street food vendors onto a digital platform."
          />
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <ProjectCard
            tags={["Smart Contract",
              "Solidity",
              "Next js",
              "Hardhat"
            ]}
            tagColors={{
              Solidity: "#FA7343",
              "Next js": "#0CA5E9",
              Hardhat: "#23AB86",
              "Smart Contract": "#635BFF",
            }}
            imageSrc="/block.jpeg"
            githubLink="https://github.com/rajeev35/Product-Tracking-Supply-chain--Blockchain"
            
            title="Float UI"
            description="A Blockchan based Product tracking supply chain system. which is increase the efficiency of the supply chain."
          />
        </BlurFade>
      </div>
    </div>
  );
}
