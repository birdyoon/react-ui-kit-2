import { useContext, useMemo } from "react";
import { ModalContext } from ".";
import ReactDOM from "react-dom";
import { modalBackdropCls } from "@consts/className";

interface ModalBackdropProps {
  className?: string;
}
const ModalBackdrop = ({ className }: ModalBackdropProps) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const handleClickBackdrop = () => {
    setIsOpen(false);
  };

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalBackdropCls}` : modalBackdropCls;
  }, [className]);

  return ReactDOM.createPortal(
    isOpen && (
      <div
        className={modalCls}
        onClick={handleClickBackdrop}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "1",
          background: "rgba(0, 0, 0, 0.8)",
        }}
      />
    ),
    document.body
  );
};
export default ModalBackdrop;
