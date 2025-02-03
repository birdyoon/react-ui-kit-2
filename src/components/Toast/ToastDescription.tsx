import { toastDescriptionCls } from "@consts/className";
import { PropsWithChildren, useMemo } from "react";

interface ToastDescriptionProps extends PropsWithChildren {
  className?: string;
}

const ToastDescription = ({ className, children }: ToastDescriptionProps) => {
  const toastCls = useMemo(() => {
    return className
      ? `${className} ${toastDescriptionCls}`
      : toastDescriptionCls;
  }, [className]);

  return (
    <>
      <div className={toastCls}>{children}</div>
    </>
  );
};

export default ToastDescription;
