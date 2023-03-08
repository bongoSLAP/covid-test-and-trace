import { useState } from 'react';
import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import VenueCheckIn from './pages/VenueCheckInPage';
import IsolationCountdown from './pages/IsolationCountdownPage';
import TestBooking from './pages/TestBookingPage';
import './styling/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <Routes>
    <Route path='/' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
    <Route path='/SignUp' element={<SignUpPage />} />
    <Route path='/Home' element={<HomePage isLoggedIn={isLoggedIn}/>} />
    <Route path='/CheckIn' element={<VenueCheckIn />} />
    <Route path='/Countdown' element={<IsolationCountdown />} />
    <Route path='/BookTest' element={<TestBooking />} />
  </Routes>
}

export default App;
