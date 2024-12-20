import { PropsWithChildren, useContext } from "react";
import { TabsContext } from ".";
import { tabsPannelBaseCls } from "../../consts/className";

interface TabPannelProps extends PropsWithChildren {
  index: number;
}

const TabPannel = ({ children, index }: TabPannelProps) => {
  const { tabIndex } = useContext(TabsContext);

  if (index !== tabIndex) return null;
  return <div className={tabsPannelBaseCls}>{children}</div>;
};

export default TabPannel;
