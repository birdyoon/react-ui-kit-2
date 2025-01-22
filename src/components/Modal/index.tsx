import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import ModalBackdrop from "./ModalBackdrop";
import ModalContent from "./ModalContent";
import ModalTrigger from "./ModalTrigger";
import ModalClose from "./ModalClose";
import { modalBaseCls } from "@consts/className";

interface ModalCompoundProps {
  Backdrop: typeof ModalBackdrop;
  Trigger: typeof ModalTrigger;
  Close: typeof ModalClose;
  Content: typeof ModalContent;
}

interface ModalProps extends PropsWithChildren {
  className?: string;
  onCloseModel: () => void;
  onOpenModal: () => void;
  open: boolean | undefined;
}

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModel: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  onCloseModel: () => {},
});

const Modal: FC<ModalProps> & ModalCompoundProps = (props) => {
  const { children, onCloseModel, className } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contextValue = { isOpen, setIsOpen, onCloseModel, className };

  const modalCls = useMemo(() => {
    return className ? `${className} ${modalBaseCls}` : modalBaseCls;
  }, [className]);
  return (
    <>
      <ModalContext.Provider value={contextValue}>
        <div className={modalCls}>{children}</div>
      </ModalContext.Provider>
    </>
  );
};

Modal.Backdrop = ModalBackdrop;
Modal.Trigger = ModalTrigger;
Modal.Close = ModalClose;
Modal.Content = ModalContent;

export default Modal;
