"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PAGE_COUNT = 3;

export default function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  // const [textStyles, textApi] = useSpring(() => ({
  //   y: "100%",
  // }));

  // 스크롤 진행도
  const { scrollYProgress } = useScroll({
    container: containerRef,
    // onChange: ({ value: { scrollYProgress } }) => {
    //   if (scrollYProgress > 0.7) {
    //     textApi.start({ y: "0" });
    //   } else {
    //     textApi.start({ y: "100%" });
    //   }
    // },
    // default: {
    //   immediate: true,
    // },
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // 원(circle) 애니메이션
  const clipPath = useTransform(
    smoothScrollY,
    [0, 1],
    ["circle(0%)", "circle(150%)"]
  );

  // 텍스트 애니메이션
  const textOpacity = useTransform(smoothScrollY, [0.7, 0.8], [0, 1]);
  const textY = useTransform(smoothScrollY, [0.7, 1], ["30%", "0%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000", "#ff6600"]
  );

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll bg-black text-white"
    >
      <motion.div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          clipPath: clipPath,
          backgroundColor: backgroundColor,
        }}
      >
        <h1 className="text-4xl font-bold text-white text-center">
          <span className="block overflow-hidden">
            <motion.span
              style={{
                opacity: textOpacity,
                y: textY,
              }}
            >
              Aha!
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span style={{ opacity: textOpacity, y: textY }}>
              You found me!
            </motion.span>
          </span>
        </h1>
      </motion.div>

      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div key={index} className="h-screen bg-black" />
      ))}
    </div>
  );
}
