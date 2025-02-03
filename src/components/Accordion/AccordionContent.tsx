import { accordionContentCls } from "@consts/className";
import { PropsWithChildren, useContext, useMemo } from "react";
import { AccordionContext } from ".";

interface AccordionContentProps extends PropsWithChildren {
  className?: string;
  value?: string;
}

const AccordionContent = ({
  children,
  className,
  value,
}: AccordionContentProps) => {
  const { isActiveValues } = useContext(AccordionContext);

  const accordionCls = useMemo(() => {
    return className
      ? `${className} ${accordionContentCls}`
      : accordionContentCls;
  }, [className]);

  return (
    value &&
    isActiveValues.includes(value) && (
      <div className={accordionCls}>{children}</div>
    )
  );
};

export default AccordionContent;
