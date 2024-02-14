"use client";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" bg-[#0A192F]">
        <Main />

        <Skills />
      </div>
    </>
  );
}
