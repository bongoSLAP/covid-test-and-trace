import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './styling/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<LoginPage />}/>
    <Route path='/SignUp' element={<SignUpPage />} />
  </Routes>
}

export default App;
