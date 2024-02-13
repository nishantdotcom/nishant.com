"use Client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isTrue, setisTrue] = useState(0);
  const [isSidebar, setisSidebar] = useState(1);

  const details = [
    { id: "01.", specs: "Skills" },
    { id: "02.", specs: "Projects" },
    { id: "03.", specs: "Experiences" },
    { id: "04.", specs: "Contact" },
  ];

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className=" flex shadow-2xl w-auto">
          <div className="font-mono w-1/5  flex justify-start  font-bold text-3xl text-[#2d3748] p-6  ml-10px">
            NK
          </div>
          <div className=" hidden  md:flex w-4/5 justify-end px-[4vw] ">
            <div className="   flex font-mono p-6 gap-x-10">
              {details.map((data, index) => (
                <>
                  <div className=" flex" key={index}>
                    <div className="font-semibold px-2 text-black" key={index}>
                      {data.id}
                    </div>
                    <div
                      className="font-semibold hover:text-red-400"
                      key={index}
                    >
                      {data.specs}
                    </div>
                  </div>
                </>
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
              width="40"
              height="40"
              viewBox="0 0 32 32"
              className=""
            >
              <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
            </svg>
          </div>
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
                  {details.map((data, index) => (
                    <>
                      <li className="mb-2" key={index}>
                        <div className=" flex">
                          <div className="font-semibold px-2 text-black">
                            {data.id}
                          </div>
                          <div className="font-semibold hover:text-red-400">
                            {data.specs}
                          </div>
                        </div>
                      </li>
                    </>
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
