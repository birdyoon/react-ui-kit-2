import { toastTitleCls } from "@consts/className";
import { PropsWithChildren, useMemo } from "react";

interface ToastTitleProps extends PropsWithChildren {
  className?: string;
}

const ToastTitle = ({ className, children }: ToastTitleProps) => {
  const toastCls = useMemo(() => {
    return className ? `${className} ${toastTitleCls}` : toastTitleCls;
  }, [className]);

  return (
    <>
      <div className={toastCls}>{children}</div>
    </>
  );
};

export default ToastTitle;
