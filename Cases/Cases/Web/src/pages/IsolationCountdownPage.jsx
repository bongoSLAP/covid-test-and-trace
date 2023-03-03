import NavBar from '../scenes/NavBar'
import  CountdownTimer from '../hooks/countdownTimer.js'

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

  
  const deadlineDate = new Date (time * 1000);

  return (
    <div>
      <NavBar />
      <h1>Self-Isolation Countdown</h1> 
      <br /> 
      <br />
      <IsolationDate />
      <br /> 
      <br />
      <CountdownTimer targetDate={deadlineDate}/>
    </div>
  );
}

export default IsolationCountdown;