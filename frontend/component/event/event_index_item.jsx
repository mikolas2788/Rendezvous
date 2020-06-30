import React from 'react'; 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findGroupTitle } from './event_index_selectors'
import moment from 'moment'

/* TODOS
    - refactor to collect group association and delete findGroupTitle
*/

const EventIndexItem = ({ event, groups }) => {
    let eventDateTime = event.start_date
    let eventStartTime = moment(eventDateTime).format("hh:mm A")
    let route = `/test`
    let groupTitle = findGroupTitle(event, groups)

    return (
        <Link 
            className='event-item-link'
            to={route}
        >
            <div className='event-item'>
                <div className='event-item-left'>
                    <h2> {eventStartTime} </h2>
                </div>
                <div className='event-item-right'>
                    <h2 className='event-item-group-name'> {groupTitle} </h2>
                    <h1> {event.title} </h1>
                    <h2> {event.location} </h2>
                    <h2> People Attending </h2>
                </div>
            </div>
        </Link>
    )
}

const msp = (state) => {
    return ({
        groups: Object.values(state.entities.groups)
    })
}

export default connect ( msp ) (EventIndexItem)