import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import './App.css'
import Wor from './components/clas/clases'
import Bot from './components/bottom/bot'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Worrior from './warrior/warrior'

function App() {
  return (
    <Router>
    <div className='BigWrapper'> 
    <div>
        <Sidebar />
        <Wor />
      </div>
      <div>
        <Bot />
      </div>
      
    </div>
    <Switch>
      <Route exact path='/warrior' component={Worrior}  />
    </Switch>
    </Router>
  );
}

export default App;
