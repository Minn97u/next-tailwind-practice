"use client";

import { NextPage } from "next";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const ScrollLinked: NextPage = () => {
  const { scrollYProgress } = useScroll({});
  const clipPath = useTransform(
    scrollYProgress,
    () => `circle(${scrollYProgress.get() * 100}%)`
  );

  // useMotionValue
  // 애니메이션없이 즉시 바뀜
  // const y = useMotionValue(100);

  const y = useSpring(100);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // 0,1,2.... 100
    if (v > 0.7) {
      y.set(0);
    } else {
      y.set(100);
    }
  });

  const textStyle = useTransform(y, () => `${y.get()}%`);

  return (
    <div className="bg-[#171717] h-[1500px] w-full overflow-y-scroll">
      <div className="animated_layer">
        <motion.div
          style={{
            clipPath,
          }}
          className="bg-orange-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.h1 className="title">
            <span>
              <motion.span
                transition={{ duration: 2 }}
                style={{
                  y: textStyle,
                }}
              >
                {"Aha!"}
              </motion.span>
            </span>
            <span>
              <motion.span
                transition={{ duration: 2 }}
                style={{
                  y: textStyle,
                }}
              >
                {"You Found me!"}
              </motion.span>
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLinked;
