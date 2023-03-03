import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay.js';
import { useCountdown } from './useCountdown.js';
import '../styling/Countdown.css'


const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <h1>:</h1>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <h1>:</h1>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <h1>:</h1>
        <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
