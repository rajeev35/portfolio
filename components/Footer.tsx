import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <h1 className="text-center pt-20 text-gray-400">
      If you&apos;re interested in the code,{" "}
      <Link
        href="https://github.com/rajeev35/portfolio"
        className="underline transition-all hover:text-blue-500 group"
        target="_blank"
      >
        here it is
        <ArrowUp
          className="rotate-45 opacity-0 group-hover:opacity-100 w-0 group-hover:w-fit inline transition-all"
          color="#3b82f6"
          width={20}
        />
      </Link>{" "}
    </h1>
  );
}
