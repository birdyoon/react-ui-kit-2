import { FC, useEffect, useMemo, useRef } from "react";
import { progressBaseCls } from "../../consts/className";

interface ProgressProps {
  className?: string;
  stop: boolean;
}
const Progress: FC<ProgressProps> = ({ stop, className }) => {
  //   const [progress, setProgress] = useState(0);
  const animateId = useRef<number>(0);
  const barRef = useRef<HTMLDivElement>(null);

  const animate = () => {
    // console.log("animate");
    const maxWidth = window.innerWidth;
    const barWidth = barRef.current?.getBoundingClientRect().width || 0;
    // console.log("barWidth ", barWidth);
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
    if (!stop) {
      animateId.current = requestAnimationFrame(animate);
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
        height: "30px",
      }}
    ></div>
  );
};

export default Progress;
