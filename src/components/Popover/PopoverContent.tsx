import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PopoverContext } from ".";
import { popoverContentCls } from "../../consts/className";
import ReactDOM from "react-dom";

type Position = "bottom-left" | "bottom-center" | "bottom-right";

interface PopoverContentProps extends PropsWithChildren {
  className?: string;
}
const PopoverContent: FC<PopoverContentProps> = ({ children, className }) => {
  const { isOpen, triggerLocation, popoverPosition } =
    useContext(PopoverContext);
  const [isOpenContent, setIsOpenContent] = useState(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const popoverCls = useMemo(() => {
    return className ? `${className} ${popoverContentCls}` : popoverContentCls;
  }, [className]);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current?.contains(e.target as Node)
      ) {
        setIsOpenContent(false);
      }
    };
    document.addEventListener("mousedown", handleClose);

    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  useEffect(() => {
    setIsOpenContent(isOpen);
  }, [isOpen]);

  const top = useMemo(() => {
    return triggerLocation.bottom;
  }, [triggerLocation]);

  const left = useMemo(() => {
    return triggerLocation.x;
  }, [triggerLocation]);

  const right = useMemo(() => {
    return triggerLocation.right;
  }, [triggerLocation]);

  const leftCenter = useMemo(() => {
    return left + (right - left) / 2;
  }, [left, right]);

  if (!isOpenContent) {
    return null;
  }

  const positons = {
    "bottom-left": { left: `${left}px`, top: `${top}px` },
    "bottom-center": { left: `${leftCenter}px`, top: `${top}px` },
    "bottom-right": { left: `${right}px`, top: `${top}px` },
  };

  const style: React.CSSProperties = {
    position: "absolute",
    ...positons[popoverPosition as Position],
  };

  return ReactDOM.createPortal(
    <div ref={contentRef} className={popoverCls} style={style}>
      {children}
    </div>,
    document.body
  );
};

export default PopoverContent;
