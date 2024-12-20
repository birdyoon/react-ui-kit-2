import { useContext, useEffect, useRef } from "react";
import { BreadcrumbContext } from ".";

const BreadcrumbSperator = () => {
  const { setSperatorWidth } = useContext(BreadcrumbContext);
  const speratorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const speratorDomRect = speratorRef.current?.getBoundingClientRect();
    // console.log("speratorDomRect ", speratorDomRect?.width);
    const width = speratorDomRect?.width ?? 0;
    setSperatorWidth((prev) => prev + width);
  }, [speratorRef]);

  return <span ref={speratorRef}>{">"}</span>;
};

export default BreadcrumbSperator;
