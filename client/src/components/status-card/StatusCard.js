import React from 'react';
import './StatusCard.css';


const StatusCard = (props) => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default StatusCard;
