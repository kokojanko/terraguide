import React from 'react'
import Sidebar from './sidebar/sidebar'
import './app.css'
import Worrior from './imege/worrior.png';
import Wizzard from './imege/wizzard.png';
import Sommoner from './imege/sommoner.png';
import Archer from './imege/archer.jpg'

function App() {
  return (
    <div className='BigWrapper'>
      <Sidebar />
      <div className='wrapper'>
        <div className='container'>
          <div className="o2t-element">
          <div>Воин</div>
          </div>
          <div className="o2t-element--hidden">
            <a>
              <img src={Worrior} width='100%' height='100%' />
            </a>
          </div>
        </div>
        <div className='container'>
          <div className="o2t-element">
            <div>Стрелок</div>
          </div>
          <div className="o2t-element--hidden">
            <a>
              <img src={Archer} width='120%' height='100%' />
            </a>
          </div>
        </div>
        <div className='container'>
          <div className="o2t-element">
          <div>Маг</div>
          </div>
          <div className="o2t-element--hidden">
            <a>
              <img src={Wizzard} width='100%' height='100%' />
            </a>
          </div>
        </div>
        <div className='container'>
          <div className="o2t-element">
          <div>Призыватель</div>
          </div>
          <div className="o2t-element--hidden">
            <a>
              <img src={Sommoner} width='80%' height='80%' />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="o2t-element"></div>

    <div className="o2t-element--hidden">Скрытый элемент</div> */}
    </div>

  );
}

export default App;
