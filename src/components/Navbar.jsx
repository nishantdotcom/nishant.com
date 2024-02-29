"use Client";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Link from "next/link";

function Navbar() {
  const [isTrue, setisTrue] = useState(0);
  const [isSidebar, setisSidebar] = useState(1);

  const details = [
    { id: "01.", specs: "Skills", getLink: "#Skills" },
    { id: "02.", specs: "Projects", getLink: "#Projects" },
    { id: "03.", specs: "Experiences", getLink: "#Experience" },
    { id: "04.", specs: "Contact", getLink: "#Contact" },
  ];

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleClick = () => {
    if (isSidebar == 1) {
      setisSidebar(0);
    } else {
      setisSidebar(1);
    }
  };
  const x = "sm-hidden";
  const y = "md-hidden";

  const valid = x;
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className=" bg-[#0A192F] flex shadow-2xl w-auto">
          <div className="font-mono w-1/5   flex justify-start  font-bold text-3xl text-[#22D3EE] p-6  ml-10px">
            NK
          </div>
          <div className=" hidden  md:flex w-4/5 justify-end px-[4vw] ">
            <div className="   flex font-mono p-6 gap-x-10">
              {details.map((data, index) => (
                <div key={index}>
                  <div className=" flex mt-2" key={index}>
                    <div className=" text-sm px-2 text-[#22D3EE]" key={index}>
                      {data.id}
                    </div>
                    <div
                      className=" text-white hover:text-[#22D3EE] hover:cursor-pointer text-sm"
                      key={index}
                    >
                      <Link href={data.getLink}>{data.specs}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={handleClick}
            className=" visible md:hidden lg:hidden p-6  flex w-4/5 justify-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g fill="#ffffff">
                <g transform="scale(5.12,5.12)">
                  <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {isSidebar ? (
          <>
            <div></div>
          </>
        ) : (
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <div class=" fixed top-0 right-0 z-40 w-100 h-screen  overflow-y-auto bg-[#0A192F]  ">
              <div class="w-40  bg-[#0A192F] p-2">
                <ul className="pt-10">
                  {details.map((data, index) => (
                    <div key={index}>
                      <li
                        className="mb-2 justify-around p-4 hover:cursor-pointer"
                        key={index}
                      >
                        <div className=" flex " key={index}>
                          <div
                            className="text-sm px-2 text-[#22D3EE]"
                            key={index}
                          >
                            {data.id}
                          </div>
                          <div
                            className="text-sm px-2 text-white hover:text-[#22D3EE]"
                            key={index}
                          >
                            <Link href={data.getLink}>{data.specs}</Link>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;
