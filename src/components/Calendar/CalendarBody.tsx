import { useContext } from "react";
import { CalendarContext } from ".";

const CalendarBody = () => {
  const { date } = useContext(CalendarContext);

  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  return <>{firstDate.toJSON()}</>;
};

export default CalendarBody;
