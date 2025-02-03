import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";
import { toastCloseCls } from "@consts/className";

interface ToastCloseProps extends PropsWithChildren {
  className?: string;
}

const ToastClose = ({ children, className }: ToastCloseProps) => {
  const toastCls = useMemo(() => {
    return className ? `${className} ${toastCloseCls}` : toastCloseCls;
  }, [className]);

  if (isValidElement(children)) {
    const childElement = children as ReactElement;
    return cloneElement(childElement, {
      className: toastCls,
    });
  }
  return (
    <>
      <div className={toastCls}>close</div>
    </>
  );
};

export default ToastClose;
