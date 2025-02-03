import { accordionTriggerCls } from "@consts/className";
import { PropsWithChildren, useContext, useMemo } from "react";
import { AccordionContext } from ".";

interface AccordionTriggerProps extends PropsWithChildren {
  className?: string;
  value?: string;
}

const AccordionTrigger = ({
  children,
  className,
  value,
}: AccordionTriggerProps) => {
  const { toggle } = useContext(AccordionContext);

  const accordionCls = useMemo(() => {
    return className
      ? `${className} ${accordionTriggerCls}`
      : accordionTriggerCls;
  }, [className]);

  return (
    <div className={accordionCls} onClick={() => value && toggle(value)}>
      {children}
    </div>
  );
};

export default AccordionTrigger;
