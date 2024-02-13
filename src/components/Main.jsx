import React from "react";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <section className="bg-[#0A192F] flex flex-col relative pt-10">
        <div className=" px-12 text-[#22D3EE]  tracking-wider">
          Hi, my name is
        </div>
        <div className="  tracking-wider px-12 py-4 lg:py-3 justify-center  font-sans  text-5xl  lg:text-8xl  font-bold word-break   text-slate-200">
          Nishant Kumar.
        </div>
        <div className="  tracking-wider px-12 lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break   text-slate-400">
          I am a Full-Stack developer.
        </div>
        <div className="px-12 py-3 justify-center font-sans      text-slate-400">
          I&apos;m a software developer specialized in building web apps.
          Currently I&apos;m working at Helper4u as a Full-Stack Developer.
        </div>
        <div className=" border border-white   text-center m-10 "></div>
      </section>
    </motion.div>
  );
}
