import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarCurrentCls } from "../../consts/className";

interface CalendarCurrentProps {
  className?: string;
}
const CalendarCurrent = ({ className }: CalendarCurrentProps) => {
  const { date } = useContext(CalendarContext);

  const Month = date.getMonth() + 1;
  const Date = date.toDateString();

  const calendarCls = useMemo(() => {
    return className
      ? `${className} ${calendarCurrentCls}`
      : calendarCurrentCls;
  }, [className]);

  return (
    <div className={calendarCls}>
      {Date}
      <div>{Month}월</div>
    </div>
  );
};

export default CalendarCurrent;
