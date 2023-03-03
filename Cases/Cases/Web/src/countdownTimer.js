import { useState, useEffect } from 'react';

export default function ExampleCounter() {

  const time = 1679302800;
  var now = new Date().getTime();
  var timeleft = now - time;
  

      
  const [counter, setCounter] = useState(timeleft);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let days = Math.floor(counter / (1000 * 60 * 60 * 24));
  let hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((counter % (1000 * 60)) / 1000);
      


  return (
    <div className="App">
      <h1>Counter: {counter} {days} {hours}  {minutes}  {seconds}</h1>
    </div>
  );
}