import React from 'react'

const EventIndexSet = ({ date, events }) => {
    return (
        <div className="event-index-set">
            <h1 className="event-index-date"> {date} </h1>
            {events}
        </div>
    )
}

export default EventIndexSet 