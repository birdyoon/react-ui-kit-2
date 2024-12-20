import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { PopoverContext } from ".";
import { PopoverContentCls } from "../../consts/className";
import ReactDOM from "react-dom";

interface PopoverContentProps extends PropsWithChildren {}
/* trigger bottom-left, bottom-center, bottom-right좌표구해서 position에 조건줬을때 저 위치로 나타나게  */
const PopoverContent: FC<PopoverContentProps> = ({ children }) => {
  const { isOpen, triggerLocation, position } = useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const contentDomRect = contentRef.current?.getBoundingClientRect();
  //   }, [isOpen]);

  console.log("triggerLocation ", triggerLocation);

  if (position === "bottom-left") {
  }

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      className={PopoverContentCls}
      //   style={{ position: "absolute" }}
    >
      {children}
    </div>,
    document.body
  );
};

export default PopoverContent;
