"use client";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className=" bg-[#0A192F] ">
        <Navbar />

        <Main />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* <div className=" w-full h-full flex align-middle justify-center pt-10">
        <Animation />
      </div> */}
    </>
  );
}
