import React from 'react'
import EventIndexItem from './event_index_item'
import EventIndexSet from './event_index_set'
import moment from 'moment'


function handleEvents (events, groups, searchValue, selectedDay) {
    let filteredEvents, sortedEvents, separatedEvents, eventSets
    filteredEvents = filterEvents(events, searchValue, selectedDay)
    sortedEvents = sortEventsByDate(filteredEvents)
    separatedEvents = separateEventsByDate(sortedEvents)
    eventSets = indexSetCreator(separatedEvents, groups)
    return eventSets
}

function filterEvents (events, searchValue, selectedDay) {
    const fixedSearchValue = searchValue.toLowerCase()
    const fixedSelectedDate = moment(calendarDateFormatter(selectedDay))
    return events.filter(event => {
        let eventTitle, eventDate, fixedEventDate, displayEventDate
        eventTitle = event.title.toLowerCase()
        eventDate = event.start_date
        fixedEventDate = moment(eventDate)
        displayEventDate = fixedEventDate.format("dddd, MMMM D")
        if ((searchValue === "" || eventTitle.includes(fixedSearchValue))
            && fixedEventDate.isAfter(fixedSelectedDate)) {
            event["fixedDate"] = fixedEventDate
            event["displayDate"] = displayEventDate
            return true
        } else {
            return false
        }
    })
}

function sortEventsByDate (filteredEvents) {
    return filteredEvents.sort((event1, event2) => (
        dateComparer(event1, event2))
    )
}

function separateEventsByDate (sortedEvents) {
    let separatedEvents = new Map()
    for ( let i = 0; i < sortedEvents.length; i++ ) {
        let event = sortedEvents[i]
        let displayDate = event.displayDate
        if ( separatedEvents.has(displayDate) ) {
            separatedEvents.get(displayDate).push(event) 
        } else {
            separatedEvents.set(displayDate, [])
            separatedEvents.get(displayDate).push(event) 
        }
    } 
    return separatedEvents
}

function indexSetCreator (separatedEvents, groups) {
    let indexSets = []
    for ( let [date, events] of separatedEvents ) {
        let indexItemSet = <EventIndexSet key={indexSets.length} date={date} events={events} groups={groups}/>
        indexSets.push(indexItemSet)
    }
    return indexSets
}

function indexItemCreator (events, groups) {
    return events.map(event => {
        return <EventIndexItem key={event.id} event={event} groupTitle={findGroupTitle(event, groups)} />
    })
}

function calendarDateFormatter(selectedDay) {
    return selectedDay.year + "-" + selectedDay.month + "-" + selectedDay.day
}

function dateComparer (event1, event2) {
    let eventOneDate, eventTwoDate
    eventOneDate = event1.fixedDate
    eventTwoDate = event2.fixedDate
    return eventOneDate.isAfter(eventTwoDate) ? 1 : -1
}

function findGroupTitle(event, groups) {
    let eventGroupId = event.group_id
    for (let i = 0; i < groups.length; i++) {
        let group = groups[i]
        if (group.id === eventGroupId) {
            return group.title
        }
    }
}

export { handleEvents, indexItemCreator }