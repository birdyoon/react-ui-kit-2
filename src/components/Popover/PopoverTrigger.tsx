import { FC, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { PopoverContext } from ".";
import { PopoverTriggerCls } from "../../consts/className";

interface PopoverTriggerProps extends PropsWithChildren {}
const PopoverTrigger: FC<PopoverTriggerProps> = ({ children }) => {
  const { isOpen, setIsOpen, setTriggerLocation } = useContext(PopoverContext);
  // getBoundingClientRect(), ref  버튼 아래 왼쪽, 중간, 끝 좌표 구하기

  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const triggerDomRect = triggerRef.current?.getBoundingClientRect();
    // console.log("triggerDomRect ", triggerDomRect);
    if (triggerDomRect) {
      setTriggerLocation(triggerDomRect);
    }
  }, []);

  const handleClickTrigger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={PopoverTriggerCls}>
      <button onClick={handleClickTrigger} ref={triggerRef}>
        {children}
      </button>
    </div>
  );
};

export default PopoverTrigger;
