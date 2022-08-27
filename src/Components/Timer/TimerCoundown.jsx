import React, { useEffect, useState } from "react";
import { StyledTimer } from "./StyledTimer";

export const TimerCoundown = () => {
  /* The above code is a countdown timer. */
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  let interval;

  /**
   * It takes the current date and time and subtracts it from the date and time of the event.
   */
  const startTimer = () => {
    const coundownDate = new Date("Sep 20 , 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coundownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update State
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    });
  };

  /* Calling the startTimer function. */
  useEffect(() => startTimer());

  return (
    <StyledTimer>
      <h2 className="coundown_title">Poplin top with ruffle</h2>
      <div className="coundown_timer">
        <div className="days count">
          <p className="day_count">{day}</p>
          <span className="coundown_text">days</span>
        </div>
        <span className="coundown_devider">:</span>
        <div className="hours count">
          <p className="day_count">{hour}</p>
          <span className="coundown_text">Hours</span>
        </div>
        <span className="coundown_devider">:</span>
        <div className="minutes count">
          <p className="day_count">{minute}</p>
          <span className="coundown_text">Minutes</span>
        </div>
        <span className="coundown_devider">:</span>
        <div className="seconds count">
          <p className="day_count">{second}</p>
          <span className="coundown_text">Seconds</span>
        </div>
      </div>
      <div className="coundown_cta">
        <button className="btn">Get Only $20</button>
      </div>
    </StyledTimer>
  );
};
