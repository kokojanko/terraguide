import React from 'react'
import './sidebar.css'

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function Sidebar() {
    return (
        <div className='Bigwrapper'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"><div className='WhereYouAt'>Главная</div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><div className='else'>Воин</div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><div className='else'>Стрелок</div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><div className='else'>Маг</div></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><div className='else'>Призыватель</div></a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      );
}

export default Sidebar