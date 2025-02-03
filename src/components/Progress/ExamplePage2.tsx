import { useEffect, useRef, useState } from "react";

// 모니터 주사율 구하기
const ExamplePage2 = () => {
  const [refreshRate, setRefreshRate] = useState<number | null>(null); // 주사율 저장
  const frameId = useRef<number>(0);
  const startTime = useRef<number>(performance.now()); // 주사율 측정 시작시간
  const frameCount = useRef<number>(0); // 현재 프레임 수

  useEffect(() => {
    const calculateRefreshRate = (timestamp: number) => {
      frameCount.current += 1; // 현재 프레임 수 증가
      const elapsed = timestamp - startTime.current;
      if (elapsed >= 1000) {
        // 1초 이상 경과 시
        const rate = (frameCount.current / elapsed) * 1000; // 초당 프레임 수
        setRefreshRate(Math.round(rate));
        startTime.current = timestamp;
        frameCount.current = 0;
      }

      frameId.current = requestAnimationFrame(calculateRefreshRate);
    };

    frameId.current = requestAnimationFrame(calculateRefreshRate);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>모니터 주사율</h1>
      {refreshRate ? (
        <p>현재 주사율: {refreshRate} Hz</p>
      ) : (
        <p>주사율 계산 중...</p>
      )}
    </div>
  );
};

export default ExamplePage2;
