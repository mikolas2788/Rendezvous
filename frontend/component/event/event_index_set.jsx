import React from 'react'
import { indexItemCreator } from './event_index_selectors'

const EventIndexSet = ({ date, events, groups }) => {
    return (
        <div className="event-index-set">
            <h1 className="event-index-date"> {date} </h1>
            {indexItemCreator(events, groups)}
        </div>
    )
}

export default EventIndexSet 