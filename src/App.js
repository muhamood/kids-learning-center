import React from 'react';
import './App.css';
import { Landing } from './components/Landing';
import { Navbar } from './components/Navbar';
import { Plain } from './components/Plain';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Landing/>
     <Plain/>
    </div>
  );
}

export default App;

