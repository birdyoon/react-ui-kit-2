import { PropsWithChildren, useMemo } from "react";
import { tabsMenuListBaseCls } from "@consts/className";

interface TabMenuListProps extends PropsWithChildren {
  className?: string;
}
const TabMenuList = ({ children, className }: TabMenuListProps) => {
  const tabsCls = useMemo(() => {
    return className
      ? `${className} ${tabsMenuListBaseCls}`
      : tabsMenuListBaseCls;
  }, [className]);

  return <div className={tabsCls}>{children}</div>;
};

export default TabMenuList;
