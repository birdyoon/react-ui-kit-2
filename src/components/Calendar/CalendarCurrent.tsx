import { useContext } from "react";
import { CalendarContext } from ".";

const CalendarCurrent = () => {
  const { date } = useContext(CalendarContext);
  //   console.log("date ", date);
  // const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  // const Day = date.getDate();

  const Date = date.toDateString();

  return (
    <div>
      {/* {Year}년{Month}월{Day}일 */}
      {Date}
      <div>{Month}월</div>
    </div>
  );
};

export default CalendarCurrent;
