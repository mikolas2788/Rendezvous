import React from 'react'; 
import { Link } from 'react-router-dom'

const EventIndexItem = ({ groupTitle, event, currentUser }) => {

    let route = `/test`
    return (
        <Link 
            className='event-item-link'
            to={route}
        >
            <div className='event-item'>
                <div className='event-item-left'>
                    <h2> {event.start_time} </h2>
                </div>
                <div className='event-item-right'>
                    <h2 className='event-item-group-name'> {groupTitle} </h2>
                    <h1> {event.title} </h1>
                    <h2> Location </h2>
                    <h2> People Attending </h2>
                </div>
            </div>

        </Link>
    )
}

export default EventIndexItem

