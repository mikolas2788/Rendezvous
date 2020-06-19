import React, { useState, useEffect } from 'react'
import EventIndexItem from './event_index_item'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import moment from 'moment'

const EventIndex = ({ searchValue, groups, events, fetchEvents }) => {
    let today = utils().getToday()
    const [ selectedDay, setSelectedDay ] = useState(today)
    let formattedDate = calendarDateFormatter(selectedDay)
    let displayedDate = moment(formattedDate).format("dddd, MMMM D")
    
    useEffect (() => {
        fetchEvents()
    }, [] )

    function calendarDateFormatter (selectedDay) {
        return selectedDay.year + "-" + selectedDay.month + "-" + selectedDay.day
    }

    function handleEvents () {

        const filterEvents = events.filter(event => {
            let eventTitle = event.title
            if ( searchValue === "" || eventTitle.includes(searchValue) ) {
                return true
            } else {
                return false
            }
        })

        return filterEvents.map(event => (
            <EventIndexItem 
                key={event.id}
                event={event}
                groupTitle={findGroupTitle(event)}
            />
        ))
    }

    function findGroupTitle(event) {
        let eventGroupId = event.group_id
        for ( let i = 0; i < groups.length; i++ ) {
            let group = groups[i]
            if ( group.id === eventGroupId) {
                return group.title
            }
        }
    }

    return (

        <div className='event-index-container'>
            <div className='event-index-left'>
                <h1 className="event-index-date"> { displayedDate } </h1>
                { handleEvents() }
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

export default EventIndex