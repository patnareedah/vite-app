
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './signin.jsx';
import Profile from './profile.jsx';

function App() {
  const token = localStorage.getItem('accessToken');

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Profile /> : <Signin />} />
          <Route path="/profile" element={token ? <Profile /> : <Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

