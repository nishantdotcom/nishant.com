"use Client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

function Experience() {
  const workExpData = [
    {
      id: 1,
      name: "Helper4u",
      role: "Software Developer",
      time: "2023 - Present",
      description: [
        "Developed the web app using React.js, Redux, and Tailwind CSS.",
        "Integrate Google geocode Api for accurate Co-ordinate search. ",
        "Developed the backend of web app using Nodejs,Express and SQL.",
      ],
    },
    {
      id: 2,
      name: "Aspirehive",
      role: "Software Developer",
      time: "2022 - 2023",
      description: [
        "Developed the Frontend using React.js and Tailwind CSS. ",
        "Sole developer, responsible for all aspects of the projects",
        "Developed the backend of web app using Nodejs,Express and SQL",
      ],
    },
  ];

  const [dataId, setDataid] = useState(workExpData[0]);

  function handleClick(data) {
    console.log(data);
    setDataid(data);
  }

  return (
    <motion.div className="  " id="Experience">
      <div className=" flex gap-x-2 p-8 ">
        <div className="text-[#22D3EE] text-xl font-bold pt-2 md:pt-6">02.</div>
        <div className="  tracking-wider  lg:py-3 justify-center  font-sans  text-3xl  lg:text-4xl  font-bold word-break  text-slate-400">
          Where I&apos;ve Worked
        </div>
      </div>
      <div className=" p-2 ">
        <div className="overflow-hidden">
          <ul className="m-2 flex justify-center gap-x-20 place-content-center ">
            {workExpData.map((data, index) => (
              <li
                key={index}
                onClick={() => handleClick(data)}
                className=" cursor-pointer text-slate-400 p-3 "
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {dataId && (
          <>
            <div className=" flex ">
              <div className=" lg:w-[25%] w-[5%] "> </div>
              <div className=" lg:w-[50%] sm:w-[90%] m-4   ">
                <div className=" text-slate-400  font-sans  text-2xl font-semibold  lg:flex ">
                  {` Software Developer `}
                  <div className="text-[#22D3EE] pl-1 flex ">{`@${dataId.name}`}</div>
                </div>
                <div className=" text-slate-400  ">{dataId.time}</div>
              </div>
              <div className="w-[25%] sm:w-[5%] "> </div>
            </div>
            <div className=" flex  ">
              <div className="lg:w-[25%] sm:w-[5%]  "> </div>
              <div className=" p-3 m-4 lg:w-[50%] sm:w-[90%] ">
                {dataId.description.map((data, index) => {
                  return (
                    <div className="   gap-x-2 pt-1   " key={index}>
                      <div className="flex ">
                        <div className="py-1  ">
                          <FaCaretRight className=" text-[#22D3EE]" />
                        </div>
                        <div className="text-slate-400   ">{data}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lg:w-[25%] sm:w-[5%]  "> </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
export default Experience;
