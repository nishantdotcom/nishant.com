import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { SiCplusplusbuilder } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    {
      name: "React Js",
      icon: <FaReact className="h-10 w-10 text-[#22D3EE]" />,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript className="h-10 w-10 text-[#22D3EE]" />,
    },
    { name: "Redux", icon: <SiRedux className="h-10 w-10 text-[#22D3EE]" /> },
    {
      name: "Next Js",
      icon: <TbBrandNextjs className="h-10 w-10 text-[#22D3EE]" />,
    },
    {
      name: "Mongo Db",
      icon: <DiMongodb className="h-10 w-10 text-[#22D3EE]" />,
    },
    {
      name: "C/C++",
      icon: <SiCplusplusbuilder className="h-10 w-10 text-[#22D3EE]" />,
    },

    { name: "Git", icon: <FaGitAlt className="h-10 w-10 text-[#22D3EE]" /> },

    { name: "HTML5", icon: <FaHtml5 className="h-10 w-10 text-[#22D3EE]" /> },

    { name: "CSS3", icon: <FaCss3Alt className="h-10 w-10 text-[#22D3EE]" /> },
    { name: "Nodejs", icon: <DiNodejs className="h-10 w-10 text-[#22D3EE]" /> },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className="bg-[rgb(10,25,47)] flex pl-10 pt-4 justify-start pb-10 ">
          <div className=" flex gap-x-2">
            <div className="text-[#22D3EE] text-xl font-bold pt-3"> 01. </div>
            <div className=" text-slate-400 text-4xl font-bold"> My Skills</div>
          </div>
        </div>
        <div className="   sm: pl-10 sm:pr-10 transition-all ease-in-out duration-1000 flex flex-wrap place-content-center mt-10 gap-6 sm:p-4">
          {skillsData.map((data, index) => {
            return (
              <div key={index} className="">
                <div className=" ">{data.icon}</div>
                <div className="   text-[#22D3EE] pt-4">{data.name}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
