import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';

function App() {
  return (
    <div>
    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<HomePage />} />
           
          </Routes>
       
     
    </BrowserRouter>
    </div>
  );
}

export default App;
