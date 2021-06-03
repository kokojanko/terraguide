import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import './app.css'
import Wor from './components/clas/clases'
import Bot from './components/bottom/bot'

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
