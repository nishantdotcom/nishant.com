"use Client";
import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const data = [
    {
      id: 1,
      project_name: "Travel Log Webapp",
      project_desc:
        "A travel log is a web app that tells the places you have travelled that keep all your journey experience at one place.",
      tech_stack: ["React js", "Next js", "Mongo Db"],
      github_link: "https://github.com/nishantdotcom/travel_log",
      image: "",
    },
    {
      id: 2,
      project_name: "Live Covid-19 App",
      project_desc: "A Webapp that provide realtime analysis of Covid-19 ",
      tech_stack: ["React js", "React-hook", "Mongo Db"],
      github_link: "https://github.com/nishantdotcom/react-covid-track-app",
      image: "",
    },
  ];
  return (
    <motion.div>
      <div className=" flex gap-x-2 p-8 ">
        <div className="text-[#22D3EE] text-xl font-bold pt-2 md:pt-6">03.</div>
        <div className="  tracking-wider  lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break  text-slate-400">
          Some Thing that I&apos;ve Created
        </div>
      </div>
      <div className="p-4  ">
        {data.map((item, index) => {
          return (
            <div
              className="md:flex  xl:flex lg:flex  justify-center gap-x-10 p-6"
              key={index}
            >
              <div className="md:w-[50%] xl:w-[50%] bg-red-100 rounded-xl">
                Image
              </div>
              <div className="md:w-[50%] xl:w-[50%] ">
                <div className="tracking-wider  lg:py-3 justify-center  font-sans  text-xl  lg:text-2xl  font-bold word-break  text-[#22D3EE] sm:mt-4 sm:mb-4">
                  {item.project_name}
                </div>
                <div className="  border border-[#041938] shadow-xl text-slate-400 rounded-xl bg-[#041938] font-sans p-4 ">
                  {item.project_desc}
                </div>
                <div className="  flex gap-x-4 pt-2">
                  {item.tech_stack.map((x, index) => {
                    return (
                      <div
                        className="text-[#22D3EE] p-2  rounded-lg bg-slate-700 shadow-2xl"
                        key={index}
                      >
                        {x}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
