"use client";
import React from "react";

import { useState, useEffect } from "react";
import { easeIn, easeInOut, motion, spring, useAnimation } from "framer-motion";
import clsx from "clsx";
function Animation() {
  return (
    <div style={{ height: "2000px" }}>
      <motion.div
        animate={{ rotate: 180 }}
        transition={{
          type: "spring",
          bounce: 0.25,
        }}
        className=" border border-black bg-yellow-500 rounded-xl w-20 h-20 flex items-center  justify-center "
      >
        Hello
      </motion.div>
    </div>
  );
}

export default Animation;
