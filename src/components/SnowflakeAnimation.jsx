import "../assets/SnowflakeAnimation.css";
import useResizeObserver from "../hooks/useResizeObserver";

const SnowflakeAnimation = ({ count = 50 }) => {
  const [ref, size] = useResizeObserver();

  return (
    <div className="container" ref={ref}>
      {snowFlake(count, size.width)}
    </div>
  );
};

const snowFlake = (count, width) => {
  const flakes = [];
  for (let i = 0; i < count; i++) {
    const position = randomPosition(width); // 使用最新的视口宽度
    const size = randomSize();
    const opacity = randomOpacity();
    const animationDuration = randomAnimationDuration();
    const animationDelay = randomDelay();
    const animationName = i % 2 === 0 ? "fall-left" : "fall-right";
    const rotate = randomRotate();

    flakes.push(
      <div
        key={i}
        className="snowflake"
        style={{
          left: `${position}px`,
          animation: `${animationName} ${animationDuration} infinite`,
          animationDelay: animationDelay,
          opacity: opacity,
          width: size,
          height: size,
          transform: `rotate(${rotate})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#eab308"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6" />
            <path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2" />
            <path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4" />
          </g>
        </svg>
      </div>
    );
  }
  return flakes;
};

// 随机的位置，根据视口宽度来调整
const randomPosition = (width) => {
  return Math.random() * width;
};

// 随机的大小 10-20px
const randomSize = () => {
  return `${Math.random() * 10 + 40}px`;
};

// 随机的透明度 0.1-0.9
const randomOpacity = () => {
  return Math.random() * 0.8 + 0.1;
};

// 随机的延迟 0-5s
const randomDelay = () => {
  return `${Math.random() * 5}s`;
};

// 随机的旋转角度 0-360deg
const randomRotate = () => {
  return `${Math.random() * 360}deg`;
};

// 随机的动画时间 5-10s
const randomAnimationDuration = () => {
  return `${Math.random() * 5 + 5}s`;
};

export default SnowflakeAnimation;
