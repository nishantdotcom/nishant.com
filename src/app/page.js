"use client";

import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className=" bg-[#0A192F] w-full h-full">
        <Navbar />

        <Main />
        <Skills />
      </div>

      {/* <div className=" w-full h-full flex align-middle justify-center pt-10">
        <Animation />
      </div> */}
    </>
  );
}
