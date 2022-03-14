import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptionChain from './pages/OptionChain';
import Research from './pages/Research'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<OptionChain />}/>
          <Route path='/research' element={ <Research />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
