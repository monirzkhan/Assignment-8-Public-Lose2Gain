import React, { useEffect, useState } from 'react';
import './Exercise.css'
import logo from '../../images/logo.png'
import photo from '../../images/Monir Photo 01.jpg'
import DailyWork from '../DailyWork/DailyWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import MyCart from '../MyCart/MyCart';

const Exercise = () => {
    const [routine, setRoutine] = useState([])
    
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data=>setRoutine(data))
    }, [])
    
    return (
        <div className='homePage'>
            <div >
                <div className='headings'>
                    <img src={logo} alt="" />
                    <h1>Loose to Gain</h1>
                </div>
                <div className='exercise-container'>
                    {
                        routine.map(work => <DailyWork
                            key={work.id}
                            routine={work}
                        ></DailyWork>)
                    }

                </div>
            </div>

            <div className='cart-container'>
                <MyCart></MyCart>
            </div>
            </div>
        
    );
};

export default Exercise;