import React from 'react'
import './sidebar.css'



function Sidebar() {
    return (
        <div className='Biggerwrapper'>
          <div className='obortka'>  
            <div class="str"><a href='/main'  className='ssilka'>Главная</a></div>
            <div class="str"><a href='/warrior' className='ssilka'>Воин</a></div>
            <div class="str"><a className='ssilka'>Стрелок</a></div>
            <div class="str"><a className='ssilka'>Маг</a></div>
            <div class="str"><a className='ssilka'>Призыватель</a></div>
            <div class="str"><a className='ssilka'>Эксперт</a></div>
            <div class="str"><a className='ssilka'>Мастер</a></div>
          </div>
      </div>
      );
}

export default Sidebar