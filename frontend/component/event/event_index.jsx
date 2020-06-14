import React, { useState, useEffect } from 'react'
import EventIndexItem from './event_index_item'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from 'react-modern-calendar-datepicker';

const EventIndex = ({ searchValue }) => {
    let today = utils().getToday()
    const [ selectedDay, setSelectedDay ] = useState(today)
    // let formattedDate = dateformatter(new Date())
    // debugger

    function dateFormatter (selectedDay) {
        return selectedDay.month + " " + selectedDay.day
    }

    let formattedDate = dateFormatter(selectedDay)

    // function dateformatter(date) {
    //     // debugger
    //     let splitDate = date.toDateString().split(" ")
    //     let month = date.toLocaleString('default', { month: 'long' })
    //     let [day, unused, num] = splitDate;
    //     return day + ", " + month + " " + num
    // }

    return (
        <div className='event-index-container'>
            <div className='event-index-left'>
                <h1 className="event-index-date"> { formattedDate } </h1>
                <EventIndexItem />
                <EventIndexItem />
                <EventIndexItem />
                <EventIndexItem />
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