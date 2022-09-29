import React, { useEffect, useState } from 'react';
import './Exercise.css'
import logo from '../../images/logo.png'
import photo from '../../images/Monir Photo 01.jpg'
import DailyWork from '../DailyWork/DailyWork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarTunnel, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import MyCart from '../MyCart/MyCart';

const Exercise = () => {
    const [routine, setRoutine] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data=>setRoutine(data))
    }, [])
    
    const handleToList = (routine) => {
        let newCart = [];
        newCart = [...cart, routine]
        setCart(newCart)
        console.log('clicked',newCart)
    }
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
                            handleToList={handleToList}
                        ></DailyWork>)
                    }

                </div>
            </div>

            <div className='cart-container'>
                
                <MyCart
                cart={cart}
                ></MyCart>
            </div>
            </div>
        
    );
};

export default Exercise;