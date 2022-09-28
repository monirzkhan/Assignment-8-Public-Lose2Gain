import React, { useEffect, useState } from 'react';
import './Exercise.css'
import logo from '../../images/logo.png'
import photo from '../../images/Monir Photo 01.jpg'
import DailyWork from '../DailyWork/DailyWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

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
                <div className='personal-info'>
                    <img src={photo} alt="" />
                    <div>
                        <h4>Md. Moniruzzaman</h4>
                        <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> <small>Dhaka, Bangladesh.</small>
                    </div>
                </div>
                <div className='personal-Data'>
                    <div>
                        <h3 style={{margin:'0px'}}>95<small style={{fontSize:'12px', color:'gray'}}>kg</small></h3>
                        <small>Weight</small>
                    </div>
                    <div>
                        <h3 style={{ margin: '0px' }}>5.9</h3>
                        <small>Height</small>
                    </div>
                    <div>
                        <h3 style={{ margin: '0px' }}>32<small style={{ fontSize: '12px', color: 'gray' }}>y</small></h3>
                        <small>Age</small>
                    </div>
                    
                </div>
                <h1>This is Cart</h1>
            </div>
                
            
        </div>
        
    );
};

export default Exercise;