import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
} from "react";
import { ModalContext } from ".";
import { modalTriggerCls } from "../../consts/className";

interface ModalTriggerProps extends PropsWithChildren {
  className?: string;
}
const ModalTrigger = ({ children, className }: ModalTriggerProps) => {
  const { setIsOpen } = useContext(ModalContext);

  const handleClickModal = () => {
    setIsOpen(true);
  };

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalTriggerCls}` : modalTriggerCls;
  }, [className]);

  if (isValidElement(children)) {
    const childElement = children as ReactElement;
    return cloneElement(childElement, {
      onClick: handleClickModal,
      className: modalCls,
    });
  }

  return (
    <div className={modalCls}>
      <a onClick={handleClickModal}>open</a>
    </div>
  );
};

export default ModalTrigger;
