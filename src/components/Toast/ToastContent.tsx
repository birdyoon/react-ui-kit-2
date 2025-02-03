import { toastContentCls } from "@consts/className";
import { PropsWithChildren, useMemo } from "react";

interface ToastContentProps extends PropsWithChildren {
  className?: string;
}

const ToastContent = ({ children, className }: ToastContentProps) => {
  const toastCls = useMemo(() => {
    return className ? `${className} ${toastContentCls}` : toastContentCls;
  }, [className]);

  return (
    <>
      <div className={toastCls}>{<>{children}</>}</div>
    </>
  );
};

export default ToastContent;
