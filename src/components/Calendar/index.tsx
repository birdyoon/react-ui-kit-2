import { createContext, FC, PropsWithChildren, useState } from "react";
import CalendarCurrent from "./CalendarCurrent";
import CalendarNavigator from "./CalendarNavigator";
import CalendarBody from "./CalendarBody";
import { calendarBaseCls } from "../../consts/className";

interface CalendarCompoundProps {
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
  Body: typeof CalendarBody;
}

interface CalendarProps extends PropsWithChildren {
  onChange?: () => void;
  dafaultValue?: Date;
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
  const { children, dafaultValue, className: classNameProp } = props;
  const [date, setDate] = useState<Date>(dafaultValue || new Date());

  const handleChangeDate = () => {
    // 네비버튼 클릭했을때, body 날짜 바뀔때 돌아가게
  };

  const contextValue = {
    handleChangeDate,
    date,
    setDate,
  };

  const calendarCls = classNameProp
    ? `${classNameProp} ${calendarBaseCls}`
    : calendarBaseCls;
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
