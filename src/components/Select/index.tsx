import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from "react";
import SelectContent from "./SelectContent";
import SelectItem from "./SelectItem";
import SelectTrigger from "./SelectTrigger";
import { selectBaseCls } from "@consts/className";
import Popover from "@ui/Popover";

export type SelectedItemValue = {
  value: string;
  label: ReactNode;
};

interface SelectCompoundProps {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
}

interface SelectProps extends PropsWithChildren {
  className?: string;
  onChange: (value: string) => void;
  value: string;
}

interface SelectContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedValue: SelectedItemValue;
  handleChangeValue: (value: SelectedItemValue) => void;
}

export const SelectContext = createContext<SelectContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  selectedValue: {
    value: "",
    label: "",
  },
  handleChangeValue: () => {},
});

const Select: FC<SelectProps> & SelectCompoundProps = (props) => {
  const { children, className: classNameProp, value, onChange } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectedItemValue>({
    value: value,
    label: "선택",
  });

  const handleChangeValue = (selectedItem: SelectedItemValue) => {
    setSelectedValue(selectedItem);
    onChange(selectedItem.value);
  };

  const contextValue = { isOpen, setIsOpen, handleChangeValue, selectedValue };

  const selectCls = useMemo(() => {
    return classNameProp ? `${classNameProp} ${selectBaseCls}` : selectBaseCls;
  }, [classNameProp]);

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover className={selectCls} popoverPosition="bottom-left">
        {children}
      </Popover>
    </SelectContext.Provider>
  );
};

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;
export default Select;
