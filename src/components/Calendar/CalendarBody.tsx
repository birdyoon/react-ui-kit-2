import { useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarBodyCls } from "@consts/className";

interface CalendarBodyProps {
  className?: string;
}

const CalendarBody = ({ className }: CalendarBodyProps) => {
  const { date, setDate, handleChangeDate } = useContext(CalendarContext);

  const year = date.getFullYear();
  const month = date.getMonth();

  const prevLast = new Date(year, month, 0); // 지난달 마지막 날짜정보
  const thisLast = new Date(year, month + 1, 0); // 이번달 마지막 날짜정보

  const prevLastDate = prevLast.getDate(); // 지난달 마지막 날짜 number
  const prevLastDay = prevLast.getDay(); // 지난달 마지막 요일

  const thisLastDate = thisLast.getDate(); // 이번달 마지막 날짜
  const thisLastDay = thisLast.getDay(); // 이번달 마지막 요일

  const prevDates = [];
  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1); // 이번달 마지막 날짜의 갯수만큼 배열
  const nextDates = [];

  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }

  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i);
  }

  const prevMonth = month - 1 < 0 ? 11 : month - 1; // 1월일때 12월로
  const prevYear = month - 1 < 0 ? year - 1 : year; // 1월일때 전년도로
  const prevObjects = prevDates.map((day) => {
    const date = new Date(prevYear, prevMonth, day);
    return new Date(date.getTime() + 9 * 60 * 60 * 1000); // toISOString() 시간대가 UTC라 +9시간
  });

  const thisObjects = thisDates.map((day) => {
    const date = new Date(year, month, day);
    return new Date(date.getTime() + 9 * 60 * 60 * 1000);
  });

  const nextMonth = month + 1 < 11 ? month + 1 : 0;
  const nextYear = month + 1 < 11 ? year : year + 1;
  const nextObjects = nextDates.map((day) => {
    const date = new Date(nextYear, nextMonth, day);
    return new Date(date.getTime() + 9 * 60 * 60 * 1000);
  });

  const handleClickdate = (date: Date) => {
    setDate(date);
    handleChangeDate(date);
  };

  const calendarCls = useMemo(() => {
    return className ? `${className} ${calendarBodyCls}` : calendarBodyCls;
  }, [className]);

  return (
    <div className={calendarCls}>
      {prevObjects.map((date, index) => (
        <div key={index} onClick={() => handleClickdate(date)}>
          {date.toISOString()}
        </div>
      ))}
      {thisObjects.map((date, index) => (
        <div key={index} onClick={() => handleClickdate(date)}>
          {date.toISOString()}
        </div>
      ))}
      {nextObjects.map((date, index) => (
        <div key={index} onClick={() => handleClickdate(date)}>
          {date.toISOString()}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
