import { useContext } from "react";
import { CalendarContext } from ".";
import { calendarNavigatorCls } from "../../consts/className";

const CalendarNavigator = () => {
  const { date, setDate } = useContext(CalendarContext);
  const monthDay = new Date(date);

  const prevMonth = () => {
    monthDay.setMonth(date.getMonth() - 1);
    setDate(monthDay);
    console.log("이전 monthDay ", date);
  };
  const nextMonth = () => {
    monthDay.setMonth(date.getMonth() + 1);
    setDate(monthDay);
    console.log("다음 monthDay ", date);
  };
  return (
    <div className={calendarNavigatorCls}>
      <button onClick={prevMonth}>{"<"}</button>
      <button onClick={nextMonth}>{">"}</button>
    </div>
  );
};

export default CalendarNavigator;
