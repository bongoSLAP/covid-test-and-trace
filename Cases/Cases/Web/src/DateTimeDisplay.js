import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <h1>{value}</h1>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
