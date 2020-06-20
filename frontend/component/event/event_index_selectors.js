import EventIndexItem from './event_index_item'
import moment from 'moment'


function filterSortedEvents(events, groups, searchValue, fixedDate) {
    


//     return dateSortedEvents.map(event => (
//         <EventIndexItem
//             key={event.id}
//             event={event}
//             groupTitle={findGroupTitle(event, groups)}
//         />
//     ))
}

function filterEvents (events, searchValue, selectedDate) {
    const fixedSearchValue = searchValue.toLowerCase()
    const fixedSelectedDate = moment(calendarDateFormatter(selectedDate))
    return events.filter(event => {
        let eventTitle, eventDate, fixedEventDate, displayEventDate
        eventTitle = event.title.toLowerCase()
        eventDate = event.start_date
        fixedEventDate = moment(eventDate)
        displayEventDate = fixedEventDate.format("dddd, MMMM D")
        if ((searchValue === "" || eventTitle.includes(fixedSearchValue))
            && fixedEventDate.isAfter(fixedSelectedDate)) {
            event["displayDate"] = displayEventDate
            return true
        } else {
            return false
        }
    })
}

function dateSortedEvents (filteredEvents) {
    return filteredEvents.sort((event1, event2) => (
        dateComparer(event1, event2))
    )
}

function calendarDateFormatter(selectedDay) {
    return selectedDay.year + "-" + selectedDay.month + "-" + selectedDay.day
}

function dateComparer (event1, event2) {
    let eventOneDate, eventTwoDate
    eventOneDate = moment(event1.start_date)
    eventTwoDate = moment(event2.start_date)
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

export { calendarDateFormatter, filterEvents }