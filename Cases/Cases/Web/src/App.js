import { useState } from 'react';
import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import VenueCheckIn from './pages/VenueCheckInPage';
import IsolationCountdown from './pages/IsolationCountdownPage';
import TestBooking from './pages/TestBookingPage';
import './styling/App.css';
import SymptomSurvey from './pages/SymptomSurveyPage';
import MessagingService from './pages/MessagingServicePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);

  return <Routes>
    <Route path='/' element={<LoginPage setIsLoggedIn={setIsLoggedIn} setToken={setToken}/>} />
    <Route path='/SignUp' element={<SignUpPage />} />
    <Route path='/Home' element={<HomePage isLoggedIn={isLoggedIn}/>} />
    <Route path='/CheckIn' element={<VenueCheckIn token={token}/>} />
    <Route path='/Countdown' element={<IsolationCountdown />} />
    <Route path='/BookTest' element={<TestBooking token={token}/>} />
    <Route path='/SymptomSurvey' element={<SymptomSurvey />} />
    <Route path='/MessagingService' element={<MessagingService />} />
  </Routes>
}

export default App;
