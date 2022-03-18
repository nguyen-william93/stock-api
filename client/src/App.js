import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptionChain from './pages/OptionChain';
import News from './pages/News'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<OptionChain />}/>
          <Route path='/news' element={ <News />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
