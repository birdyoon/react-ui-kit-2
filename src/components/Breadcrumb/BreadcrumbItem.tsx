import { FC, PropsWithChildren, useContext, useEffect, useRef } from "react";
import { breadcrumbItemBaseCls } from "../../consts/className";
import { BreadcrumbContext } from ".";

interface BreadcrumbItemProps extends PropsWithChildren {
  href: string;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, href }) => {
  const { setItemWidth } = useContext(BreadcrumbContext);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const spanItemDomRect = ref.current?.getBoundingClientRect();
    // console.log("spanItemDomRect ", spanItemDomRect?.width);
    const width = spanItemDomRect?.width ?? 0; // width가 null일 경우 0설정

    setItemWidth((prev) => prev + width);
  }, []);

  return (
    <a className={breadcrumbItemBaseCls} href={href} ref={ref}>
      <span className={`${breadcrumbItemBaseCls} span`}>{children}</span>
    </a>
  );
};

export default BreadcrumbItem;
