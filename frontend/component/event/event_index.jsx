import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../../action/event_actions'
import { handleEvents } from './event_index_selectors'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

/* TODOS 6/19/2020 
    - separate sets of events per day
    - include group title search functionality to filter
    - partition logic functionality to separate file
    - set index limit and create button to show more
*/

// EventIndex Component
const EventIndex = ({ searchValue, groups, events, fetchEvents }) => {
    let today = utils().getToday()
    const [ selectedDay, setSelectedDay ] = useState(today)

    useEffect (() => {
        fetchEvents()
    }, [] )
    
    return (
        <div className='event-index-container'>
            <div className='event-index-left'>
                {handleEvents(events, groups, searchValue, selectedDay)}
            </div>
            <div className='event-index-right'>
                <Calendar 
                    calendarClassName="event-index-calendar"
                    value={selectedDay}
                    onChange={setSelectedDay}
                    colorPrimary={'#00a2c7'}
                />
            </div>
        </div>
    )
}

//EventIndex State/Props
const msp = (state, ownProps) => {
    let searchValue = ownProps.searchValue
    return ({
        groups: Object.values(state.entities.groups),
        events: Object.values(state.entities.events),
        searchValue,
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
}

export default connect ( msp, mdp) (EventIndex);