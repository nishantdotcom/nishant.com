"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isTrue, setisTrue] = useState(0);
  const [isSidebar, setisSidebar] = useState(1);

  const handleClick = () => {
    if (isSidebar == 1) {
      setisSidebar(0);
    } else {
      setisSidebar(1);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className=" flex justify-between w-full  shadow-2xl bg-opacity-60 backdrop-filter: blur(20px);">
          <div className=" font-mono w-1/2   font-bold text-3xl text-[#2d3748] p-6  ml-10px">
            NK
          </div>

          {isTrue ? (
            <>
              <div className="  font-mono w-1/2  p-6   flex justify-around gap-x-10">
                <div className=" flex">
                  <div className="font-semibold px-2 text-black">01. </div>
                  <div className="font-semibold hover:text-red-400">Skills</div>
                </div>
                <div className=" flex">
                  <div className="font-semibold px-2 text-black">02. </div>
                  <div className="font-semibold"> Projects</div>
                </div>
                <div className=" flex">
                  <div className="font-semibold px-2 text-black">03. </div>
                  <div className="font-semibold"> Experience</div>
                </div>
                <div className=" flex">
                  <div className="font-semibold px-2 text-black">04. </div>
                  <div className="font-semibold"> Contact</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="p-6" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                >
                  <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
                </svg>
              </div>
            </>
          )}
        </div>
        {isSidebar ? (
          <>
            <div></div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <div class=" flex h-screen justify-end shadow-2xl shadow-indigo-500/50">
              <div class="w-40 bg-gray-100  p-2">
                <ul>
                  <li class="mb-2">
                    <div className=" flex">
                      <div className="font-semibold px-2 text-black">01. </div>
                      <div className="font-semibold hover:text-red-400">
                        Skills
                      </div>
                    </div>
                  </li>
                  <li class="mb-2">
                    <div className=" flex">
                      <div className="font-semibold px-2 text-black">02. </div>
                      <div className="font-semibold hover:text-red-400">
                        Projects
                      </div>
                    </div>
                  </li>
                  <li class="mb-2">
                    <div className=" flex">
                      <div className="font-semibold px-2 text-black">03. </div>
                      <div className="font-semibold hover:text-red-400">
                        Experience
                      </div>
                    </div>
                  </li>
                  <li class="mb-2">
                    <div className=" flex">
                      <div className="font-semibold px-2 text-black">04. </div>
                      <div className="font-semibold hover:text-red-400">
                        Contact
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
