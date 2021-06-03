import React from 'react'
import './bot.css'

function Bot(){
    return(
        <div className='bigwrapper'>
            <div className='Wrapper'>
                <h1 className='WhatWillYouFind'>Что вы тут найдёте?</h1>
                <ul>
                    <li className='PointOf'>-актуальную информацию про обновление 1.4.2</li>
                    <li className='PointOf'>-план игры за воина</li>
                    <li className='PointOf'>-план игры за стрелка</li>
                    <li className='PointOf'>-план игры за мага</li>
                    <li className='PointOf'>-план игры за призывателя</li>
                    <li className='PointOf'>-подробнорасписанные механики</li>
                </ul>
                <ul>
                    <li className='PointOf'>-прохождение в эксперт моде</li>
                    <li className='PointOf'>-прохождение в мастер моде</li>
                </ul>
            </div>
        </div>
    );
}

export default Bot