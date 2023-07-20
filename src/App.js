import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Flights from './pages/flightsPage';
import Hotels from './pages/hotelsPage';
import Trains from './pages/hotelsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Flights />} />
        {/* <Route path='/flights' element={<Flights />} /> */}

        <Route path='/hotels' element={<Hotels />} />
        <Route path='/trains' element={<Trains />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
