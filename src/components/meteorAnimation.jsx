import "../assets/meteorAnimation.css";
import { useState, useRef, useLayoutEffect } from "react";
import useResizeObserver from "../hooks/useResizeObserver";

const MeteorAnimation = ({ count = 50 }) => {
  const [ref, size] = useResizeObserver();

  return (
    <div className="meteor-container" ref={ref}>
      {star(count, size.width)}
    </div>
  );
};

// 流星
const star = (count, width) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const position = randomPosition(width); // 使用最新的视口宽度
    const size = randomSize();
    const animationDuration = randomAnimationDuration(); // 随机动画持续时间
    const animationDelay = randomDelay();
    const animationName = "fall-diagonal"; // 使用新的动画名称

    stars.push(
      <div
        key={i}
        className="star"
        style={{
          left: `${position}px`,
          animation: `${animationName} ${animationDuration} infinite`,
          width: size,
          height: size,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#eab308"
            d="M9.5 22c2.003 0 3.887-.78 5.313-2.207l6.904-7.096A1 1 0 0 0 21 11h-3.301l4.175-7.514a1.001 1.001 0 0 0-1.359-1.36l-7.11 3.95l.576-2.879a1 1 0 0 0-1.629-.957L4.196 9.197c-2.924 2.924-2.924 7.682 0 10.606A7.45 7.45 0 0 0 9.5 22M5.552 10.665l5.902-5.031l-.248 1.24l-.186.93v.001l-.424 2.119l7.83-4.35l-3.3 5.94l-.001.001L14.301 13h4.331l-5.243 5.389C12.35 19.428 10.969 20 9.5 20s-2.851-.572-3.89-1.611c-2.143-2.144-2.143-5.634-.058-7.724"
          />
          <path
            fill="#eab308"
            d="M9.5 18a3.492 3.492 0 0 0 1.484-6.659c.005.053.016.105.016.159a1.5 1.5 0 1 1-3 0c0-.054.011-.106.016-.159A3.492 3.492 0 0 0 9.5 18"
          />
        </svg>
      </div>
    );
  }
  return stars;
};

// 随机的位置，根据视口宽度来调整
const randomPosition = (width) => {
  return Math.random() * width; // 依赖于动态视口宽度
};

// 随机的大小 10-20px
const randomSize = () => {
  return `${Math.random() * 10 + 10}px`;
};

// 随机的透明度 0.1-0.9
const randomOpacity = () => {
  return Math.random() * 0.8 + 0.1;
};

// 随机的延迟 0-5s
const randomDelay = () => {
  return `${Math.random() * 5}s`;
};

// 随机的动画时间 4-6s
const randomAnimationDuration = () => {
  return `${Math.random() * 2 + 4}s`;
};

export default MeteorAnimation;
