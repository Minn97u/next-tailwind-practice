"use client";

import { NextPage } from "next";
import { animated, useSpring } from "@react-spring/web";
import { useState, useRef, useEffect } from "react";

function AnimatedNumberReactSpring({ value }: { value: number }) {
  const [props, api] = useSpring(() => ({
    from: { number: 0 },
    to: { number: value },
    config: { tension: 120, friction: 14 }, // 애니메이션 속도 조절
  }));

  // value 값이 변경될 때마다 애니메이션을 리스타트
  api.start({ to: { number: value } });

  return <animated.span>{props.number.to((v) => v.toFixed(0))}</animated.span>;
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span>{num}</span>
      <AnimatedNumberReactSpring value={num} />
    </div>
  );
}

const UseSpring: NextPage = () => {
  const configDivRef = useRef<HTMLDivElement>(null);
  const [configOpen, setConfigOpen] = useState<boolean>(false);

  const props = useSpring({
    width: configOpen ? configDivRef.current?.clientWidth : 0,
  });

  // const props = useSpring({
  //   from: {
  //     opacity: 0,
  //     width:0,
  //     transform: "translateX(0px)",
  //   },
  //   to: {
  //     opacity: 1,
  //     width:200,
  //     transform: "translateX(100px)",
  //   },
  // });

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
