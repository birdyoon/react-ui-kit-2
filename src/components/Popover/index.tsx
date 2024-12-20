import { createContext, FC, PropsWithChildren, useState } from "react";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";
import { PopoverBaseCls } from "../../consts/className";

interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverProps extends PropsWithChildren {
  className?: string;
  position: string;
}

interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerLocation: DOMRect;
  setTriggerLocation: React.Dispatch<React.SetStateAction<DOMRect>>;
  position: string;
}

export const PopoverContext = createContext<PopoverContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  triggerLocation: new DOMRect(),
  setTriggerLocation: () => {},
  position: "",
});

const Popover: FC<PopoverProps> & PopoverCompoundProps = (props) => {
  const { children, className: classNameProp } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [triggerLocation, setTriggerLocation] = useState(new DOMRect());
  //   console.log("triggerLocation ", triggerLocation);

  const contextValue = {
    isOpen,
    setIsOpen,
    triggerLocation,
    setTriggerLocation,
    position: "",
  };
  const popoverCls = classNameProp
    ? `${classNameProp} ${PopoverBaseCls}`
    : PopoverBaseCls;
  return (
    <PopoverContext.Provider value={contextValue}>
      <div className={popoverCls}>{children}</div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
export default Popover;
