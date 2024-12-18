"use client";

import { NextPage } from "next";
import { useEffect, useRef } from "react";

const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

const IO: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //callback: (entires: IntersectionObserverEntry[], observer: IntersectionObserver) => void
    // entries: IntersectionObserverEntry[]
    // observer: IntersectionObserver 인스턴스
    // options: IntersectionObserverInit

    const io = new IntersectionObserver(
      (entires) => {
        entires.forEach((entry) => {
          // 뷰포트안에 들어오면 true, 아니면 false
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      const elems = ref.current.querySelectorAll(".observe");
      elems.forEach((elem) => io.observe(elem));
    }

    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center space-y-5 relative"
    >
      {PAGE_TITLES.map((title) => (
        <div
          key={title}
          className="observe transition-all duration-1000 opacity-0 relative top-[100vh] flex justify-center items-center w-[400px] h-[600px]"
        >
          <span className="text-8xl text-neutral-700 font-bold">{title}</span>
        </div>
      ))}
    </div>
  );
};

export default IO;
