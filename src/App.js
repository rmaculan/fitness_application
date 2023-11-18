import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';

const App = () => {
  return (
    <Box width="auto" 
    xx={{ width: { xl: '1480px', xs:'40px'}}} 
    m="auto"
    style={{
      backgroundImage: "linear-gradient(to bottom, #FFF, #FF9800)",
    }}
    
    >
      <Navbar 
      style={{
        backgroundImage: "linear-gradient(to bottom, #FFF, #FF9800)",
        boxShadow: "0px 2px 32px rgba(0, 0, 0, 0.25)",
        padding: "20px",
      }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/BMICalculator" element={<BMICalculator />} /> */}
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
