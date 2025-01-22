import { PropsWithChildren, useMemo } from "react";
import Popover from "../Popover";
import { selectContentCls } from "../../consts/className";

interface SelectContentProps extends PropsWithChildren {
  className?: string;
}
const SelectContent = ({ children, className }: SelectContentProps) => {
  const selectCls = useMemo(() => {
    return className ? `${className} ${selectContentCls}` : selectContentCls;
  }, [className]);

  return (
    <div className={selectCls}>
      <Popover.Content>{children}</Popover.Content>
    </div>
  );
};

export default SelectContent;
