import About from "@/components/About";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import ServiceList from "@/components/ServiceList";
import Skills from "@/components/Skills";
import { DM_Sans } from "next/font/google";

export const dMsans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={dMsans.className}>
      <div className=" pt-[2.1875rem] px-[9.375rem] max-sm:p-5">
        <Header />
        <About />
        <ProjectList />
        <ServiceList />
        <Skills />
      </div>

      <footer className=" w-full h-[2.5rem] bg-[#212121] flex flex-col justify-center items-center">
        <p className=" font-bold text-white">
          Orgulhosamente feito por
          <span className=" text-greenmain">Iuri Silva</span>
        </p>
      </footer>
    </main>
  );
}
