import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PharmacyStore from './components/MedicalStore/PharmacyStore';
import MedicineAlarm from './components/MedicineAlarm';
import Advantages from './components/Advantages';
import Signin from './components/Signin';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      
      <Routes>
       
        <Route path="/" element={
          <>
            <Navbar /> 
            <Hero />
            <Services />
            <Advantages/>
          </>
        } />

        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/pharmacy-store" element={<PharmacyStore />} />
        <Route path="/medicine-alarm" element={<MedicineAlarm />} />
      </Routes>
    </Router>
  );
};

export default App;
