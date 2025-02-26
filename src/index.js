import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Firework from './firework';
import Flocking from './flocking';
import Scratch from './scratch';
import Rainny from './rainny';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <div>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/firework' element={<Firework/>}/>
        <Route path='/flocking' element={<Flocking/>}/>
        <Route path='/scratch' element={<Scratch />}/>
        <Route path='/rainny' element={<Rainny />}/>
      </Routes>
     </div>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
