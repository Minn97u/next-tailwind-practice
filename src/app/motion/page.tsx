"use client";

import { NextPage } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

const MotionTest: NextPage = () => {
  const xMotionValue = useMotionValue(0);
  const transformedValue = useTransform(
    xMotionValue,
    [-200, 200], //input
    ["#7b2ff7", "#f107a3"] //output
  );
  useMotionValueEvent(xMotionValue, "change", (latestValue) => {
    console.log("x축: ", latestValue);
  });

  const yMotionValue = useMotionValue(0);
  useMotionValueEvent(yMotionValue, "change", (latestValue) => {
    console.log("y축: ", latestValue);
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        style={{
          x: xMotionValue, //x축이 변화함에 따라 Value값이 변한다.
          y: yMotionValue,
          backgroundColor: transformedValue,
        }}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.5,
          transition: {
            duration: 2,
          },
        }}
        whileHover={{
          backgroundColor: "red",
        }}
        drag
        className="w-32 h-32 rounded-md bg-blue-400 flex justify-center items-center"
      >
        {"Hello"}
      </motion.div>
    </div>
  );
};

export default MotionTest;
