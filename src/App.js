import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/index.js';
import Experience from './pages/Experience'


function App() {
  return (
    
    
      
      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/A experiência' element={<Experience/>} />

        </Routes>
      </Router>

   

  );
}

export default App;
