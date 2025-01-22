import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarNavigatorCls } from "../../consts/className";

interface CalendarNavigatorProps {
  className?: string;
}

const CalendarNavigator = ({ className }: CalendarNavigatorProps) => {
  const { date, setDate } = useContext(CalendarContext);

  const prevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };
  const nextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };

  const calendarCls = useMemo(() => {
    return className
      ? `${className} ${calendarNavigatorCls}`
      : calendarNavigatorCls;
  }, [className]);
  return (
    <div className={calendarCls}>
      <button onClick={prevMonth}>{"<"}</button>
      <button onClick={nextMonth}>{">"}</button>
    </div>
  );
};

export default CalendarNavigator;
