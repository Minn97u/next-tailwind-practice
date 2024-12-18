"use client";

import { NextPage } from "next";
import { useInView } from "react-intersection-observer";

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

const IO: NextPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-5 relative">
      {PAGE_TITLES.map((title, index) => {
        const { ref, inView } = useInView({
          threshold: 0.5,
          triggerOnce: true, // 한 번만 동작하도록 설정
        });

        return (
          <div
            key={title}
            ref={ref}
            className={`transition-all duration-1000 delay-${index * 200} ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } relative flex justify-center items-center w-[400px] h-[600px]`}
          >
            <span className="text-8xl text-neutral-700 font-bold">{title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default IO;
