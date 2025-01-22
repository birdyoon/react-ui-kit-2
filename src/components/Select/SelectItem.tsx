import { PropsWithChildren, useContext, useMemo } from "react";
import { SelectContext, SelectedItemValue } from ".";
import { selectItemCls } from "../../consts/className";

interface SelectItemProps extends PropsWithChildren {
  className?: string;
  value: string;
}

const SelectItem = ({ children, value, className }: SelectItemProps) => {
  const { handleChangeValue } = useContext(SelectContext);

  const handleClickItem = () => {
    handleChangeValue({ value, label: children as SelectedItemValue["label"] });
  };

  const selectCls = useMemo(() => {
    return className ? `${className} ${selectItemCls}` : selectItemCls;
  }, [className]);

  return (
    <div className={selectCls} onClick={handleClickItem}>
      {children}
    </div>
  );
};

export default SelectItem;
