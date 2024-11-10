

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    image:
      "https://pbs.twimg.com/media/GJ8BDl-XIAEe9kN?format=jpg&name=4096x4096",
    title: "Swift Student Challenge",
    year: "2024",
    direction: "left",
    redirect: "https://x.com/madebyshaurya/status/1774138013188038818",
  },
  {
    image:
      "https://pbs.twimg.com/media/GQ-zEh0bwAUhgZu?format=jpg&name=4096x4096",
    title: "Buildspace Grant",
    year: "2024",
    direction: "center",
    redirect: "https://x.com/madebyshaurya/status/1820637038904848552",
  },
];

export default function Achievements() {
  return (
    <div className="pt-10">
      <BlurFade delay={0.5} inView>
        <h1 className="text-center text-2xl md:text-4xl">achievements</h1>
      </BlurFade>
      <BlurFade delay={0.75} inView>
        <h1 className="text-center pb-10 text-gray-400">
          these are some hackathons/contests that i won/got selected.
        </h1>
      </BlurFade>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {achievements.map((e, index) => (
          <BlurFade key={index} delay={1 + index * 0.3} inView>
            <Link href={e.redirect} target="_blank">
              <div className="group/card group">
                <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
                    "backgroundImage"
                  )}
                  style={{
                    backgroundImage: `url(${e.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: e.direction,
                  }}
                >
                  <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10 justify-end">
                    <ArrowUp
                      color="#fff"
                      className="group-hover:rotate-0 rotate-45 transition-all"
                    />
                  </div>
                  <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {e.title}
                    </h1>
                    <p className="font-normal text-sm font-mono text-gray-50 relative z-10 my-4">
                      {e.year}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
