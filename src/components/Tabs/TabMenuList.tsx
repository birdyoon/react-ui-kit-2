import { PropsWithChildren } from "react";
import { tabsMenuListBaseCls } from "../../consts/className";

const TabMenuList = ({ children }: PropsWithChildren) => {
  return <div className={tabsMenuListBaseCls}>{children}</div>;
};

export default TabMenuList;
