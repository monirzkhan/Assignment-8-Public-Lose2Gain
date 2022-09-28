import React from 'react';
import photo from '../../images/Monir Photo 01.jpg'
import './MyCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const MyCart = () => {
    return (
        <div>
            <div className='personal-info'>
                <img src={photo} alt="" />
                <div>
                    <h4>Md. Moniruzzaman</h4>
                    <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> <small>Dhaka, Bangladesh.</small>
                </div>
            </div>
            <div className='personal-Data'>
                <div>
                    <h3 style={{ margin: '0px' }}>95<small style={{ fontSize: '12px', color: 'gray' }}>kg</small></h3>
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
            <h4>Add A Break</h4>
            <div className='break'>
                <button className='break-btn'>20s</button>
                <button className='break-btn'>40s</button>
                <button className='break-btn'>50s</button>
                <button className='break-btn'>60s</button>

            </div>
            <h4>Exercise Details</h4>
            <div className='exercise-time'>
                <h4>Exercise Time</h4>
                <p><span>0</span>minutes</p>
            </div>
            <div className='break-time'>
                <h4>Break Time</h4>
                <p><span>0</span>seconds</p>
            </div>
            <div>
                <button className='completed-btn'>Exercise Completed</button>
            </div>
        </div>
        
    );
};

export default MyCart;