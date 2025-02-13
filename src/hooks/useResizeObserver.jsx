import { useState, useEffect, useRef } from "react";

function useResizeObserver() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    const handleResize = (entries) => {
      // 获取元素的最新宽高
      const entry = entries[0]; // ResizeObserver 会传入所有监听的元素
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current); // 观察当前元素
    }

    return () => {
      resizeObserver.disconnect(); // 清理 ResizeObserver
    };
  }, []);

  return [elementRef, size];
}

export default useResizeObserver;
