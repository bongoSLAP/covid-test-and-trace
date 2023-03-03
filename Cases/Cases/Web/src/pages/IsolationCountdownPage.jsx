import { useState, useEffect, useRef  } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../scenes/NavBar'
import ExampleCounter from '../countdownTimer.js'

var Result = 0;


const time = 1679302800;
function calculateDeadlineDate() {
  let Deadline = new Date(time * 1000);
  Result = Deadline.toLocaleDateString();
  
}


const IsolationCountdown = () => {
  function IsolationDate () {
    calculateDeadlineDate();
    return(
      <div>
        <h2>You must self isloate until {Result}</h2>
      </div>
    );
  }
  

  
  /*const CountdownTimer = () =>{
      var now = new Date().getTime();
      var timeleft = time - now;
  
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      
      return(
        <div>
          <h3>{days} {hours} {minutes} {seconds}</h3>
        </div>
      );
  }*/

  
  
  return (
    <div>
      <NavBar />
      <h1>Self-Isolation Countdown</h1> 
      <br /> 
      <br />
      <IsolationDate />
      <br /> 
      <br />
      <ExampleCounter />
    </div>
  );
}

export default IsolationCountdown;