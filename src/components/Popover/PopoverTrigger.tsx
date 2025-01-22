import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { PopoverContext } from ".";
import { popoverTriggerCls } from "../../consts/className";

interface PopoverTriggerProps extends PropsWithChildren {
  className?: string;
}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, className }) => {
  const { setIsOpen, setTriggerLocation } = useContext(PopoverContext);
  // getBoundingClientRect(), ref  버튼 아래 왼쪽, 중간, 끝 좌표 구하기

  const triggerRef = useRef<HTMLButtonElement>(null);

  const updateTriggerLocation = () => {
    const triggerDomRect = triggerRef.current?.getBoundingClientRect();
    // console.log("triggerDomRect ", triggerDomRect);
    if (triggerDomRect) {
      setTriggerLocation(triggerDomRect);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateTriggerLocation);

    return () => {
      window.removeEventListener("resize", updateTriggerLocation);
    };
  }, []);

  const handleClickTrigger = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    updateTriggerLocation();
  };

  const popoverCls = useMemo(() => {
    return className ? `${className} ${popoverTriggerCls}` : popoverTriggerCls;
  }, [className]);

  return (
    <div className={popoverCls}>
      <button
        className={`${popoverCls} button`}
        onClick={handleClickTrigger}
        ref={triggerRef}
      >
        {children}
      </button>
    </div>
  );
};

export default PopoverTrigger;
