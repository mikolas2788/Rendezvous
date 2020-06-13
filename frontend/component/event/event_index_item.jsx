import React from 'react'; 
import { Link } from 'react-router-dom'

const EventIndexItem = ({ group, event, currentUser }) => {

    return (
        <Link 
            className='event-item-link'
            to={route}
        >
        <div className='event-item'>
            <div className='event-item-left'>
                <h2> Time </h2>
            </div>
            <div className='event-item-right'>
                <h2> Group Name </h2>
                <h1> Event Name </h1>
                <h3> People Attending </h3>
            </div>
        </div>

        </Link>
    )
}

export default EventIndexItem

