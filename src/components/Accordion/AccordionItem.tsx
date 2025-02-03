import { accordionItemCls } from "@consts/className";
import {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";

interface AccordionItemProps extends PropsWithChildren {
  className?: string;
  value: string;
}
const AccordionItem = ({ children, className, value }: AccordionItemProps) => {
  const childrenWithProps = Children.toArray(children).map((child) =>
    cloneElement(child as ReactElement, { value })
  );
  const accordionCls = useMemo(() => {
    return className ? `${className} ${accordionItemCls}` : accordionItemCls;
  }, [className]);

  return <div className={accordionCls}>{childrenWithProps}</div>;
};

export default AccordionItem;
