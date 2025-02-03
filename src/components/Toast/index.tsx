import { FC, PropsWithChildren, useMemo } from "react";
import ToastContent from "./ToastContent";
import ToastDescription from "./ToastDescription";
import ToastTitle from "./ToastTitle";
import { toastBaseCls } from "@consts/className";
import ToastClose from "./ToastClose";

interface ToastCompoundProps {
  Content: typeof ToastContent;
  Description: typeof ToastDescription;
  Title: typeof ToastTitle;
  Close: typeof ToastClose;
}

interface ToastProps extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

const Toast: FC<ToastProps> & ToastCompoundProps = (props) => {
  const { children, className, style } = props;

  const toastCls = useMemo(() => {
    return className ? `${className} ${toastBaseCls}` : toastBaseCls;
  }, [className]);

  return (
    <div className={toastCls} style={style}>
      {children}
    </div>
  );
};

Toast.Content = ToastContent;
Toast.Description = ToastDescription;
Toast.Title = ToastTitle;
Toast.Close = ToastClose;

export default Toast;
