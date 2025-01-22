import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
} from "react";
import { ModalContext } from ".";
import { modalCloseCls } from "@consts/className";

interface ModalCloseProps extends PropsWithChildren {
  className?: string;
}
const ModalClose = ({ children, className }: ModalCloseProps) => {
  const { setIsOpen } = useContext(ModalContext);

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalCloseCls}` : modalCloseCls;
  }, [className]);

  if (isValidElement(children)) {
    const childElement = children as ReactElement;
    return cloneElement(childElement, {
      onClick: handleClickClose,
      className: modalCls,
    });
  }

  return (
    <>
      <div className={modalCls} onClick={handleClickClose}>
        close
      </div>
    </>
  );
};

export default ModalClose;
