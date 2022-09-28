import React, { useEffect, useState } from 'react';
import './Exercise.css'
import logo from '../../images/logo.png'
import DailyWork from '../DailyWork/DailyWork';

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
                <h1>Loose to Gain</h1>
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
                <h1>This is Cart</h1>
            </div>
                
            
        </div>
        
    );
};

export default Exercise;