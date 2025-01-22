import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import CalendarCurrent from "./CalendarCurrent";
import CalendarNavigator from "./CalendarNavigator";
import CalendarBody from "./CalendarBody";
import { calendarBaseCls } from "@consts/className";

interface CalendarCompoundProps {
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
  Body: typeof CalendarBody;
}

interface CalendarProps extends PropsWithChildren {
  onChange?: (date: Date) => void;
  // dafaultValue?: Date;
  value?: Date;
  className?: string;
}

interface CalendarContextProps {
  handleChangeDate: (date: Date) => void;
  date: Date;
  setDate: (date: Date) => void;
}

export const CalendarContext = createContext<CalendarContextProps>({
  handleChangeDate: () => {},
  date: new Date(),
  setDate: () => {},
});

const Calendar: FC<CalendarProps> & CalendarCompoundProps = (props) => {
  const { children, value, onChange, className: classNameProp } = props;
  const [date, setDate] = useState<Date>(value || new Date());

  useEffect(() => {
    if (value) {
      setDate(value);
    }
  }, [value]);

  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);

    if (onChange) {
      onChange(newDate);
    }
  };

  const contextValue = {
    handleChangeDate,
    date,
    setDate,
  };

  const calendarCls = useMemo(() => {
    return classNameProp
      ? `${classNameProp} ${calendarBaseCls}`
      : calendarBaseCls;
  }, [classNameProp]);
  return (
    <>
      <CalendarContext.Provider value={contextValue}>
        <div className={calendarCls}>{children}</div>
      </CalendarContext.Provider>
    </>
  );
};

Calendar.Current = CalendarCurrent;
Calendar.Navigator = CalendarNavigator;
Calendar.Body = CalendarBody;

export default Calendar;
