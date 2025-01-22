import { PropsWithChildren, useContext, useMemo } from "react";
import { TabsContext } from ".";
import { tabsPannelBaseCls } from "@consts/className";

interface TabPannelProps extends PropsWithChildren {
  className?: string;
  index: number;
}

const TabPannel = ({ children, index, className }: TabPannelProps) => {
  const { tabIndex } = useContext(TabsContext);

  const tabsCls = useMemo(() => {
    return className ? `${className} ${tabsPannelBaseCls}` : tabsPannelBaseCls;
  }, [className]);

  if (index !== tabIndex) return null;
  return <div className={tabsCls}>{children}</div>;
};

export default TabPannel;
