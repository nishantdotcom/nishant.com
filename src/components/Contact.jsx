"useClient";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div>
      <div className=" flex">
        <div className="lg:w-[25%] w-[10%] "> </div>
        <div className="lg:w-[50%] w-[80%]   p-4 m-2">
          <div className=" text-center text-[#22D3EE]  font-sans">
            {" "}
            0.4 What&apos;s Next?
          </div>
          <div className=" text-center px-12 lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break   text-slate-400">
            Get In Touch
          </div>
          <div className=" text-center  text-[#22D3EE]  font-sans ">
            I&apos;m currently working as Full Stack Developer at Helper4u.
            I&apos;m looking for new opportunities. If you have any, please feel
            free to contact me. I&apos;ll get back to you as soon as possible.
          </div>
        </div>
        <div className="lg:w-[25%] w-[10%] "></div>
      </div>
    </motion.div>
  );
}

export default Contact;
