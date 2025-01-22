import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { BreadcrumbContext } from ".";
import { breadcrumbItemBaseCls } from "@consts/className";

interface BreadcrumbItemProps extends PropsWithChildren {
  className?: string;
  href: string;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  children,
  href,
  className,
}) => {
  const { setItemWidth } = useContext(BreadcrumbContext);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const spanItemDomRect = ref.current?.getBoundingClientRect();
    const width = spanItemDomRect?.width ?? 0; // width가 null일 경우 0설정

    setItemWidth((prev) => prev + width);
  }, []);

  const breadcrumbCls = useMemo(() => {
    return className
      ? `${className} ${breadcrumbItemBaseCls}`
      : breadcrumbItemBaseCls;
  }, [className]);

  return (
    <a className={breadcrumbCls} href={href} ref={ref}>
      <span className={`${breadcrumbCls} span`}>{children}</span>
    </a>
  );
};

export default BreadcrumbItem;
