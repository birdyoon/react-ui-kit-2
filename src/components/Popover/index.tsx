import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";
import { popoverBaseCls } from "../../consts/className";

interface PopoverCompoundProps {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
}

interface PopoverProps extends PropsWithChildren {
  className?: string;
  popoverPosition: string;
}

interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerLocation: DOMRect;
  setTriggerLocation: React.Dispatch<React.SetStateAction<DOMRect>>;
  popoverPosition: string;
}

export const PopoverContext = createContext<PopoverContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  triggerLocation: new DOMRect(),
  setTriggerLocation: () => {},
  popoverPosition: "bottom-left",
});

const Popover: FC<PopoverProps> & PopoverCompoundProps = (props) => {
  const { children, className: classNameProp, popoverPosition } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [triggerLocation, setTriggerLocation] = useState(new DOMRect());
  //   console.log("triggerLocation ", triggerLocation);

  const contextValue = {
    isOpen,
    setIsOpen,
    triggerLocation,
    setTriggerLocation,
    popoverPosition,
  };

  const popoverCls = useMemo(() => {
    return classNameProp
      ? `${classNameProp} ${popoverBaseCls}`
      : popoverBaseCls;
  }, [classNameProp]);

  return (
    <PopoverContext.Provider value={contextValue}>
      <div className={popoverCls}>{children}</div>
    </PopoverContext.Provider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
export default Popover;
