import { FC, PropsWithChildren, createContext, useMemo, useState } from "react";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";
import { accordionBaseCls } from "@consts/className";

interface AccordionCompoundProps {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

interface AccordionProps extends PropsWithChildren {
  className?: string;
}

interface AccordionContextProps {
  isActiveValues: string[];
  toggle: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  isActiveValues: [],
  toggle: () => {},
});

const Accordion: FC<AccordionProps> & AccordionCompoundProps = (props) => {
  const { children, className } = props;
  const [isActiveValues, setIsActiveValues] = useState<string[]>([]);

  const toggle = (value: string) => {
    setIsActiveValues((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value]
    );
  };
  const contextValue = { isActiveValues, toggle };

  const accordionCls = useMemo(() => {
    return className ? `${className} ${accordionBaseCls}` : accordionBaseCls;
  }, [className]);
  return (
    <>
      <AccordionContext.Provider value={contextValue}>
        <div className={accordionCls}>{children}</div>
      </AccordionContext.Provider>
    </>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
export default Accordion;
