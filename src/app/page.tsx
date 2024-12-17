"use client";

import { NextPage } from "next";
import { animated, useSpring } from "@react-spring/web";
import { useState, useRef } from "react";

const UseSpring: NextPage = () => {
  const configDivRef = useRef<HTMLDivElement>(null);
  const [configOpen, setConfigOpen] = useState<boolean>(false);

  const props = useSpring({
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });

  return (
    <div className="flex flex-col">
      <p>{"Congfig"}</p>
      <animated.p>{props.width?.to((x) => x)}</animated.p>
      <div
        ref={configDivRef}
        className=" w-[200px] h-[200px] outline outline02 outline-neutral-700 cursor-pointer relative"
        onClick={() => setConfigOpen((prev) => !prev)}
      >
        <animated.div className={"absolute h-full bg-pink-400"} style={props} />
        <animated.div
          className={
            "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          }
        >
          {props.width?.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
};

export default UseSpring;
