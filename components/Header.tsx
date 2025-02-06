import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function Header() {
  return (
    <div className="mt-10 ml-auto justify-between mr-auto flex gap-10 items-center">
      <div>
        <BlurFade delay={0.25}>
          <h1 className="text-left md:text-5xl text-3xl">
            hey! i&apos;m shaurya.
          </h1>
        </BlurFade>
        <BlurFade delay={0.5}>
          <h1 className="text-left md:text-3xl text-md text-gray-400">
            a 14 y/o programmer who likes to build things.
          </h1>
        </BlurFade>
      </div>
      <div>
        <BlurFade delay={0.75} className="">
          <Image
            src={"/pfp.jpg"}
            alt="profile-picture"
            width={200}
            height={200}
            className="rounded-full hidden md:inline"
          />
        </BlurFade>
        <BlurFade delay={0.75} className="">
          <Image
            src={"/pfp.jpg"}
            alt="profile-picture"
            width={400}
            height={400}
            className="rounded-full inline md:hidden"
          />
        </BlurFade>
      </div>
    </div>
  );
}
