import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.tsx';
import Home from './Home.tsx';
import Register from './Register.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;





































