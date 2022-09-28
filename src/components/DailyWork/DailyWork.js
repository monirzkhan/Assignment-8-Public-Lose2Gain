import React from 'react';
import './DailyWork.css'

const DailyWork = (props) => {
    const { name, img, time, about } = props.routine;
    return (
        <div className='routine-container'>
            <img src={img} alt="" />
            <div className='routine-info'>
                <h3>{name}</h3>
                <p>Time: {time}minutes</p>
            </div>
            <button className='add-btn'>Add To List</button>
        </div>

    );
};

export default DailyWork;