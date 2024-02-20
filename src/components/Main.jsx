import React from "react";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
    >
      <section className="bg-[#0A192F] flex flex-col relative lg:pt-40 md:pt-40 sm:p-100 ">
        <div className="lg:flex md:flex">
          <div className=" sm: pt-10 xs:pt-10">
            <motion.div
              className=" px-12 text-[#22D3EE]  tracking-wider"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 4,
                bounce: 0.25,
                delay: 2,
              }}
            >
              Hi, my name is
            </motion.div>
            {/* <div className=" px-12 text-[#22D3EE]  tracking-wider">
              {" "}
              Hi, my name is
            </div> */}
            <motion.div
              className="  tracking-wider px-12 py-4 lg:py-3 justify-center  font-sans  text-5xl  lg:text-8xl  font-bold word-break   text-slate-200"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 4,
                bounce: 0.25,
                delay: 2,
              }}
            >
              Nishant Kumar.
            </motion.div>

            <motion.div
              className=" tracking-wider px-12 lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break   text-slate-400"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 4,
                bounce: 0.25,
                delay: 2,
              }}
            >
              I am a Full-Stack developer.
            </motion.div>

            <motion.div
              className=" px-12 py-3 justify-center font-sans      text-slate-400"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 5, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 4,
                bounce: 0.25,
                delay: 2,
              }}
            >
              {" "}
              I&apos;m a software developer specialized in building web apps.
              Currently I&apos;m working at Helper4u as a Full-Stack Developer.
            </motion.div>
          </div>
          <div className="    relative justify-self-center m-10 ">
            <div className="absolute top-0 left-0 h-48 w-48 xl:h-72 xl:w-72 rounded-full bg-primary/[0.2] hover:opacity-0 z-20"></div>
            <div className="transition-all duration-300 absolute h-48 w-48 xl:h-72 xl:w-72 rounded-full border  border-primary z-0 top-3 left-3"></div>
            <img
              src="./nishant1.jpeg"
              alt="nishant.jpeg"
              className="none h-48 w-48 xl:h-72 xl:w-72 rounded-full z-10 grayscale"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
