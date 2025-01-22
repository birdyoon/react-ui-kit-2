import { PropsWithChildren, useMemo } from "react";
import { selectContentCls } from "@consts/className";
import Popover from "@ui/Popover";

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
