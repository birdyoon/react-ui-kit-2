import { PropsWithChildren, useContext, useMemo } from "react";
import { TabsContext } from ".";
import { tabsMenuBaseCls } from "../../consts/className";

interface TabMenuProps extends PropsWithChildren {
  index: number;
}

const TabMenu = ({ children, index }: TabMenuProps) => {
  const { handleChangeTab, tabIndex } = useContext(TabsContext);

  const isActive = useMemo(() => tabIndex === index, [tabIndex, index]);

  if (index !== undefined) {
    return (
      <div className={tabsMenuBaseCls} data-active={isActive}>
        <button onClick={() => handleChangeTab(index)}>{children}</button>
      </div>
    );
  }
};

export default TabMenu;
