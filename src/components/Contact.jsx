import React from 'react'
import './Contact.css'

const Contact = props =>
    <div className='Contact'>
        <img className='avatar' src={props.img} alt={props.name}/>
        <div>
            <h3 className='name'>{props.name}</h3>
            <div className='status'>
                <div className={props.online === 'true' ? 'status-online' : 'status-offline'}></div>
                <span className='status-text'>{props.online === 'true' ? 'Online' : 'Offline'}</span>
            </div>
        </div>
    </div>
;

export default Contact ; 