import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-10 w-fit ml-auto mr-auto flex gap-10 items-center justify-center">
        <div>
          <BlurFade>
            <h1 className="text-left text-5xl ">hey! i&apos;m shaurya.</h1>
          </BlurFade>
          <BlurFade delay={0.25}>
          <h1 className="text-left text-3xl text-gray-400">
            i&apos;m a 13 y/o programmer who likes to build things.
          </h1>
          </BlurFade>
        </div>
        <div>
          <BlurFade delay={0.5}>
          <Image
            src={"/pfp.jpg"}
            width={150}
            height={150}
            className="border rounded-full"
            alt="profile picture"
          />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
