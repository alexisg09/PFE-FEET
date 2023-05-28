'use client';
import { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import styles from './Calendar.module.css';
import fr from "date-fns/locale/fr";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";



type CalendarProps = {
    showDetailsHandle?: (dayStr: string) => void;
}

const Calendar = ({ showDetailsHandle }: CalendarProps ) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeWeekHandle = (btnType: string) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day: Date, dayStr: string) => {
    setSelectedDate(day); // TODO use day to get data from db
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={`${styles.col} ${styles.colCenter}`} key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: fr })}
        </div>
      );
    }
    return <div className={`${styles.days} ${styles.row}`} >{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className={`${styles.col} ${styles.cell} ${styles.comboDay} ${isSameDay(day, new Date()) ? styles.today : isSameDay(day, selectedDate) ? styles.selected : ""}`}
            key={+day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className={styles.jour}>{format(day, "E", { locale: fr }).slice(0 , -1)}</span>
            <span className={styles.number}>{formattedDate}</span>
            <span className={styles.bg}>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className={styles.row} key={+day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  return (
    <div className={styles.calendar}>
        {renderCells()}
        <div className="flex flex-row justify-between">
          <button className={styles.btn} onClick={() => changeWeekHandle("prev")}><TbChevronLeft /></button>
          <button className={styles.btn} onClick={() => changeWeekHandle("next")}><TbChevronRight /></button>
        </div>

    </div>
  );
};

export default Calendar;