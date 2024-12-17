"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PAGE_COUNT = 5; // 전체 페이지 수

export default function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // 스크롤 진행도 가져오기
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // 스크롤 애니메이션에 스프링 효과 추가
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 50, // 스프링 강도
    damping: 20, // 감쇠
    mass: 1, // 질량
  });

  // 원(circle) 애니메이션 설정
  const clipPath = useTransform(
    smoothScrollY,
    [0, 1],
    ["circle(0%)", "circle(150%)"]
  );

  // 텍스트 애니메이션 설정
  const textY = useTransform(smoothScrollY, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white"
    >
      <div className="relative flex flex-col items-center justify-center h-screen">
        {/* 원(circle) 애니메이션 */}
        <motion.div
          className="absolute flex items-center justify-center w-full h-full bg-orange-400"
          style={{
            clipPath: clipPath,
          }}
        >
          <h1 className="text-4xl font-bold text-white text-center">
            <span className="block overflow-hidden">
              <motion.span style={{ y: textY }}>Aha!</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span style={{ y: textY }}>You found me!</motion.span>
            </span>
          </h1>
        </motion.div>
      </div>
      {/* 페이지 구간 */}
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div key={index} className="h-[100vh] bg-black" />
      ))}
    </div>
  );
}
