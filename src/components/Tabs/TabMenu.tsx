import { PropsWithChildren, useContext, useMemo } from "react";
import { TabsContext } from ".";
import { tabsMenuBaseCls } from "../../consts/className";

interface TabMenuProps extends PropsWithChildren {
  className?: string;
  index: number;
}

const TabMenu = ({ children, index, className }: TabMenuProps) => {
  const { handleChangeTab, tabIndex } = useContext(TabsContext);

  const isActive = useMemo(() => tabIndex === index, [tabIndex, index]);

  const tabsCls = useMemo(() => {
    return className ? `${className} ${tabsMenuBaseCls}` : tabsMenuBaseCls;
  }, [className]);

  if (index !== undefined) {
    return (
      <div className={tabsCls} data-active={isActive}>
        <button onClick={() => handleChangeTab(index)}>{children}</button>
      </div>
    );
  }
};

export default TabMenu;
