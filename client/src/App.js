import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OptionChain from './pages/OptionChain';
import News from './pages/News'
import Home from './pages/Home'
import NavBar from './components/Nav';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/news' element={ <News />}/>
          <Route path='/optionChain' element={<OptionChain />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
