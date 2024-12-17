"use client";

import { animated, useSpring, useScroll } from "@react-spring/web";

const ScrollBar: React.FC = () => {
  // useScroll 훅을 사용해 전체 페이지 스크롤 값 추적
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll();

  // 스크롤 진행도에 따라 스타일 애니메이션 설정
  const barStyle = useSpring({
    width: scrollYProgress.to((progress) => `${progress * 100}%`), // 진행도 기반 너비 설정
    backgroundColor: "rgb(130, 0, 255)", // 채워질 바의 색상
  });

  return (
    <>
      {/* 상단 스크롤 바 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "10px",
          background: "#ddd",
          zIndex: 1000,
        }}
      >
        <animated.div
          style={{
            height: "100%",
            ...barStyle,
          }}
        />
      </div>

      <animated.div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "18px",
          fontWeight: "bold",
          color: "rgb(130, 0, 255)",
          zIndex: 1000,
        }}
      >
        {scrollYProgress.to((progress) => `${Math.round(progress * 100)}%`)}
      </animated.div>

      {/* 스크롤 가능한 내용 */}
      <div style={{ height: "300vh", width: "100%", padding: "20px" }}>
        <h1>스크롤을 이용해 바 채우기</h1>
        <p>스크롤을 이용하기</p>
      </div>
    </>
  );
};

export default ScrollBar;
