import { useContext, useMemo } from "react";
import { SelectContext } from ".";
import { selectTriggerCls } from "@consts/className";
import Popover from "@ui/Popover";

interface SelectTriggerProps {
  className?: string;
}
const SelectTrigger = ({ className }: SelectTriggerProps) => {
  const { selectedValue } = useContext(SelectContext);

  const selectCls = useMemo(() => {
    return className ? `${className} ${selectTriggerCls}` : selectTriggerCls;
  }, [className]);

  return (
    <div className={selectCls}>
      <Popover.Trigger>{selectedValue.label}</Popover.Trigger>
    </div>
  );
};

export default SelectTrigger;
