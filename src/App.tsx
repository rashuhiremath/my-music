import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import AlbumPage from './Components/AlbumPage';

function App() {
 
  return (
    <div>
    <BrowserRouter>
    
      <Routes>
            <Route path='/' element={<HomePage />} />
              <Route path='/album/:id' element={<AlbumPage/>} />
           
          </Routes>
       
     
    </BrowserRouter>
    </div>
  );
}

export default App;
