import React from "react";

const date = new Date();
const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const currentDay = date.getDate();
export default function Calendar() {
  return (
    <section className="comp flex flex-col items-center calendar">
      <h1 className="mb-5">التقويم</h1>
      <div className="days grid grid-cols-7 gap-4">
        {Array.from({ length: days }, (_, i) => i + 1).map((day, index) => (
          <div
            key={index}
            id={index + 1}
            className={`day flex justify-center items-center ${
              index % 7 === 0 || index % 7 === 6 ? "weekend" : ""
            } ${currentDay == index + 1 ? "today" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
}
