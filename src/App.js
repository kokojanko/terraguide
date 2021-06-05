import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import './App.css'
import Wor from './components/clas/clases'
import Bot from './components/bottom/bot'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  return (
    <div className='BigWrapper'> 
    <div>
        <Sidebar />
        <Wor />
      </div>
      <div>
        <Bot />
      </div>
      
    </div>
  );
}

export default App;
