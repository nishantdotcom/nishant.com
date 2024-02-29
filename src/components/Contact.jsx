"useClient";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div id="Contact">
      <div className=" flex">
        <div className="lg:w-[25%] w-[10%] "> </div>
        <div className="lg:w-[50%] w-[80%]   p-4 m-2">
          <div className=" text-center text-[#22D3EE]  font-sans p-4">
            {" "}
            04. What&apos;s Next?
          </div>
          <div className=" text-center px-12 lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break  p-4  text-slate-400">
            Get In Touch
          </div>
          <div className=" text-center  text-[#22D3EE]  font-sans  p-4">
            I&apos;m currently working as Full Stack Developer at Helper4u.
            I&apos;m looking for new opportunities. If you have any, please feel
            free to contact me. I&apos;ll get back to you as soon as possible.
          </div>
          <div className=" flex justify-center  ">
            <button className="border-2 border-slate-400  pl-4 pr-4 pt-2 pb-2  rounded-xl   text-[#22D3EE] flex gap-x-2">
              <div className="  pt-4 font-sans ">Let&apos;s Connect </div>
              <div className="">
                <iframe
                  src="https://giphy.com/embed/l378Bu88CUbQyFniM"
                  width="50"
                  height="50"
                ></iframe>
              </div>
            </button>
          </div>
          <div></div>
        </div>
        <div className="lg:w-[25%] w-[10%] "></div>
      </div>
    </motion.div>
  );
}

export default Contact;
