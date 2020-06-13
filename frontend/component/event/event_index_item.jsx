import React from 'react'; 
import { Link } from 'react-router-dom'

const EventIndexItem = ({ group, event, currentUser }) => {

    let route = `/test`
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
                <h2 className='event-item-group-name'> Group Name </h2>
                <h1> Event Name </h1>
                <h2> Location </h2>
                <h2> People Attending </h2>
            </div>
        </div>

        </Link>
    )
}

export default EventIndexItem

