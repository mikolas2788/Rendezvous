import React, { useState, useEffect } from 'react'
import EventIndexItem from './event_index_item'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker'
import moment from 'moment'

const EventIndex = ({ searchValue, groups, events, fetchEvents }) => {
    let today = utils().getToday()
    const [ selectedDay, setSelectedDay ] = useState(today)
    
    function dateFormatter (selectedDay) {
        return selectedDay.month + " " + selectedDay.day
    }

    let formattedDate = dateFormatter(selectedDay)
    console.log(moment("2020-11-19T15:00:00.000Z").format("HH:mm A"))

    // function dateformatter(date) {
        // let formattedDate = dateformatter(new Date())
    //     let splitDate = date.toDateString().split(" ")
    //     let month = date.toLocaleString('default', { month: 'long' })
    //     let [day, unused, num] = splitDate;
    //     return day + ", " + month + " " + num
    // }

    useEffect (() => {
        fetchEvents()
    }, [] )

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
                <h1 className="event-index-date"> { formattedDate } </h1>
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