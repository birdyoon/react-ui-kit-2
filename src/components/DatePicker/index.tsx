import { FC, PropsWithChildren, useMemo, useState } from "react";
import { datePickerBaseCls } from "../../consts/className";
import Popover from "@ui/Popover";
import Calendar from "@ui/Calendar";

interface DatePickerProps extends PropsWithChildren {
  className?: string;
  date: Date;
  onChangeDate: (date: Date) => void;
}

const DatePicker: FC<DatePickerProps> = ({
  className: classNameProp,
  date,
  onChangeDate,
}) => {
  const [calendarDate, setCalendarDate] = useState(date);

  const handleChangeDate = (newDate: Date) => {
    setCalendarDate(newDate);
    onChangeDate(newDate);
  };

  const datePickerCls = useMemo(() => {
    return classNameProp
      ? `${classNameProp} ${datePickerBaseCls}`
      : datePickerBaseCls;
  }, [classNameProp]);

  return (
    <div className={datePickerCls}>
      <Popover popoverPosition="bottom-left">
        <Popover.Trigger>{calendarDate.toLocaleDateString()}</Popover.Trigger>
        <Popover.Content>
          <Calendar onChange={handleChangeDate} value={calendarDate}>
            <Calendar.Navigator />
            <Calendar.Body />
          </Calendar>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default DatePicker;
