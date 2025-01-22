import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import TabMenuList from "./TabMenuList";
import TabMenu from "./TabMenu";
import TabPannel from "./TabPannel";
import { tabsBaseCls } from "@consts/className";

interface TabCompoundProps {
  MenuList: typeof TabMenuList;
  Menu: typeof TabMenu;
  Pannel: typeof TabPannel;
}

interface BaseProps extends PropsWithChildren {
  className?: string;
  onChangeTab?: (tabIndex: number) => void;
}

interface TabsContextProps {
  tabIndex: number;
  handleChangeTab: (index: number) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  tabIndex: 0,
  handleChangeTab: () => {},
});

const Tabs: FC<BaseProps> & TabCompoundProps = (props) => {
  const { children, className: classNameProp, onChangeTab } = props;
  const [tabIndex, setTabIndex] = useState<number>(1);
  const handleChangeTab = (index: number) => {
    setTabIndex(index);
    onChangeTab?.(index);
  };

  const contextValue = {
    tabIndex,
    handleChangeTab,
  };
  // props으로 className 넘겨주면 해당 className이랑 붙여서(한칸 띄어서) 사용
  // 안넘겨주면 ,원래 기존에 있던 BaseCls 사용;
  const tabsCls = classNameProp
    ? `${classNameProp} ${tabsBaseCls}`
    : tabsBaseCls;

  useMemo(() => tabsCls, [tabsCls]);

  return (
    <>
      <TabsContext.Provider value={contextValue}>
        <div className={tabsCls}>{children}</div>
      </TabsContext.Provider>
    </>
  );
};

Tabs.MenuList = TabMenuList;
Tabs.Menu = TabMenu;
Tabs.Pannel = TabPannel;

export default Tabs;
