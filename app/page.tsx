import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="md:px-[20vw] px-10 pb-4">
      <Header />
      <Description />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
