import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import './styling/App.css';

function App() {
  return <Routes>
    <Route path='/' element={<LoginPage />}/>
  </Routes>
}

export default App;
