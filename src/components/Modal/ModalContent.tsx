import { PropsWithChildren, useContext, useMemo } from "react";
import { ModalContext } from ".";
import { modalContentCls } from "../../consts/className";

interface ModalContentProps extends PropsWithChildren {
  className?: string;
}
const ModalContent = ({ children, className }: ModalContentProps) => {
  const { isOpen } = useContext(ModalContext);

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalContentCls}` : modalContentCls;
  }, [className]);
  return (
    <div
      className={modalCls}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "9%",
        height: "auto%",
        zIndex: "2",
        margin: "auto",
        background: "white",
      }}
    >
      {isOpen && <>{children}</>}
    </div>
  );
};

export default ModalContent;
