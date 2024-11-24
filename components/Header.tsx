import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function Header() {
  const calculateAge = () => {
    const birthDate = new Date(2011, 1, 5); // February 5, 2011 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the current date is before the birth date this year
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());
    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

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
            a {age} y/o programmer who likes to build things.
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
