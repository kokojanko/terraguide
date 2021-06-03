import React from 'react'
import Worrior from '../imege/worrior.png';
import Wizzard from '../imege/wizzard.png';
import Sommoner from '..//imege/sommoner.png';
import Archer from '../imege/Adobe_20210603_133740.png'
import './clases.css'

function Wor(){
    return(
        <div>
             <div className='wrapper'>
        <div className='container'> 
          <div className="o2t-element">
          <div>Воин</div>
          </div>
          <div className="o2t-element--hidden">
            <a>
              <img src={Worrior} width='90%' height='100%' />
            </a>
          </div>
        </div>
        <div className='container'>
          <div className="o2t-element">
            <div>Стрелок</div>
          </div>
          
          <div className="o2t-element--hidden">
            <a>
              <img src={Archer} width='100%' height='100%' />
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
        </div>
    );
}

export default Wor