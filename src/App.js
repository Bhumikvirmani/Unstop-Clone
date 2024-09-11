import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignupPage from './Page/SignupPage';
import LoginPage from './Page/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/SignupPage" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;