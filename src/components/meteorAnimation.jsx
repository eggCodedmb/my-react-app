const meteorAnimation = ({ count }) => {
  return <div className="meteor-container"></div>;
};

// 流星
const star = () => {
  const star = [];
  for (let i = 0; i < count; i++) {
    const position = randomPosition(viewWidth); // 使用最新的视口宽度
    const size = randomSize();
    const opacity = randomOpacity();
    const animation = randomAnimation();
    const animationDuration = randomAnimationDuration();
    const animationDelay = randomDelay();
    flakes.push(
      <div
        key={i}
        style={{
          left: `${position}px`, // 加上偏移
          animation: `${animation} ${animationDuration} infinite`,
          animationDelay: animationDelay,
          opacity: opacity, // 随机透明度
          width: size,
          height: size,
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
  return star;
};

// 随机大小
const getRandomSize = () => {
  return `${Math.random() * 10 + 10}px`;
};

// 随机的位置，根据视口宽度来调整
const randomPosition = (viewWidth) => {
  return Math.random() * viewWidth; // 依赖于动态视口宽度
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

// 随机的动画 fall-right
const randomAnimation = () => {
  return "fall-right"; 
};

// 随机的动画时间 5-10s
const randomAnimationDuration = () => {
  return `${Math.random() * 5 + 5}s`;
};
