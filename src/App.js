import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/index.js';
import Experience from './pages/Experience';
import Map from './pages/Map';
import Infos from './pages/Infos';
import Ticket from './pages/Ticket';
import TicketAcquired from './pages/Ticket/TicketAcquired';
import { useRef } from 'react';


function App() {


  return (

    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/A experiência' element={<Experience />} />
        <Route path='/Mapa de Setores' element={<Map />} />
        <Route path='/Informações' element={<Infos />} />
        <Route path='/Ingresso' element={<Ticket

        />} />
        <Route path='/ingressocomprado' element={<TicketAcquired/>} />
        <Route path='/ingressocomprado/:name/:seat' element={<TicketAcquired/>} />

      </Routes>
    </Router>



  );
}

export default App;
