import { useContext, useEffect, useMemo, useRef } from "react";
import { BreadcrumbContext } from ".";
import { breadcrumbSperatorBaseCls } from "@consts/className";

interface BreadcrumbSperatorProps {
  className?: string;
}

const BreadcrumbSperator = ({ className }: BreadcrumbSperatorProps) => {
  const { setSperatorWidth } = useContext(BreadcrumbContext);
  const speratorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const speratorDomRect = speratorRef.current?.getBoundingClientRect();
    const width = speratorDomRect?.width ?? 0;
    setSperatorWidth((prev) => prev + width);
  }, [speratorRef]);

  const breadcrumbCls = useMemo(() => {
    return className
      ? `${className} ${breadcrumbSperatorBaseCls}`
      : breadcrumbSperatorBaseCls;
  }, [className]);

  return (
    <span className={breadcrumbCls} ref={speratorRef}>
      {">"}
    </span>
  );
};

export default BreadcrumbSperator;
