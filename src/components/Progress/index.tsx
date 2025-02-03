import { FC, useEffect, useMemo, useRef } from "react";
import { progressBaseCls } from "@consts/className";

interface ProgressProps {
  className?: string;
  stop: boolean;
}
const Progress: FC<ProgressProps> = ({ stop, className }) => {
  const animateId = useRef<number>(0);
  const barRef = useRef<HTMLDivElement>(null); // 진행바를 참조
  const barWidthRef = useRef<number>(0);

  const animate = () => {
    const maxWidth = window.innerWidth;
    const barWidth = barRef.current?.getBoundingClientRect().width || 0;
    barWidthRef.current = barWidth;

    // 진행바가 전체 길이를 넘거나 같을 때
    if (barWidth >= maxWidth) {
      if (animateId.current) {
        cancelAnimationFrame(animateId.current);
      }
    } else {
      barRef.current?.style.setProperty("width", `${barWidth + 1}px`);
      animateId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const maxWidth = window.innerWidth;

    if (!stop) {
      animateId.current = requestAnimationFrame(animate);
    } else {
      // stop이 true 일 때
      if (barRef.current) {
        // width 변경될때 0.5초동안 애니메이션 효과 적용
        barRef.current.style.transition = "width 0.5s linear";
        barRef.current.style.setProperty("width", `${maxWidth}px`);
      }

      const handleTransitionEnd = () => {
        const barWidth = barRef.current?.offsetWidth || 0;
        console.log("barWidth1 ", barWidth);
        if (barWidth >= maxWidth) {
          if (barRef.current) {
            barRef.current.style.display = "none";
          }
        }
      };

      // transition 종료되면 handleTransitionEnd 함수 실행
      barRef.current?.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        barRef.current?.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      };
    }
    return () => {
      if (animateId.current) {
        cancelAnimationFrame(animateId.current);
      }
    };
  }, [stop]);

  const progressCls = useMemo(() => {
    return className ? `${className} ${progressBaseCls}` : progressBaseCls;
  }, [className]);

  return (
    <div
      className={progressCls}
      ref={barRef}
      style={{
        display: "inline-block",
        backgroundColor: "black",
        height: "20px",
      }}
    ></div>
  );
};

export default Progress;

/* requestAnimationFrame 프레임당 호출이 보장되는 이유
    Animation frames queue에 콜백함수가 추가되고, 브라우저가 화면을 다시 그리는 주기(Repaint)가 되면 콜백 함수를 call stack 으로 이동시킵니다. 
    이는 브라우저의 리페인트 주기와 동기화되어 호출되므로, 보장된다고 할 수 있습니다.

    setTimeout / setInterval은 Task queue에 콜백함수가 추가되어 지정된 시간이 경과한 후, call stack이 비었을 때 태스크 큐에서 call stack으로 이동하여 실행됩니다.
     call stack에 다른 작업이 많을 경우, 실행이 지연될 수 있어서 정확한 시간 간격을 보장하지 않습니다.

    호출스택(call stack): JavaScript 코드가 실행되는 공간입니다. 함수가 호출되면 호출 스택에 쌓입니다.
    Task queue : 비동기 작업이 완료되면 콜백 함수가 여기에 저장됩니다. 호출 스택이 비었을 때 태스크 큐에 있는 작업이 호출 스택으로 이동됩니다.
    Microtask queue : 프로미스와 같은 더 높은 우선순위의 비동기 작업이 여기에 저장됩니다.

    Microtask queue > Animation frames queue > Task queue 
*/
