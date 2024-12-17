"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  // Motion Value 생성
  const motionValue = useMotionValue(0);

  // useSpring을 사용해 애니메이션 적용
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });

  // useTransform을 사용해 소수점을 정수로 변환
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  // value 값이 바뀔 때마다 motionValue를 업데이트
  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return (
    <motion.span style={{ fontSize: "2rem", fontWeight: "bold" }}>
      {displayValue}
    </motion.span>
  );
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 49).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <AnimatedNumberFramerMotion value={num} />
      </div>
    </div>
  );
}

export default App;
