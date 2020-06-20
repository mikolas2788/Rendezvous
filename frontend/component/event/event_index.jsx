import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../../action/event_actions'
import EventIndexSet from './event_index_set'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import moment from 'moment'
import { calendarDateFormatter, filterEvents } from './event_index_selectors'

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
    // let fixedDate = calendarDateFormatter(selectedDay)
    // let displayDate = moment(fixedDate).format("dddd, MMMM D")
    
    useEffect (() => {
        fetchEvents()
    }, [] )

    console.log(filterEvents(events, searchValue, selectedDay))
    
    return (
        <div className='event-index-container'>
            <div className='event-index-left'>
                {/* <EventIndexSet date={displayDate} /> */}
                {/* { handleEvents(events, groups, searchValue, fixedDate) } */}
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