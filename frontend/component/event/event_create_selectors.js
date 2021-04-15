// import React from 'react'
// import { calendarDateFormatter } from './event_index_selectors'
// import moment from 'moment'

// function displayDate(date) {
//     let formattedDate = calendarDateFormatter(date)
//     return moment(formattedDate).format('dddd, MMMM D Y')
// }

// const startDateInput = ( { ref }, selectedDay ) => (
//     <input
//         readOnly
//         ref={ref}
//         value={displayDate(selectedDay)}
//         style={{
//             minWidth: '250px',
//             padding: '16px',
//             fontSize: '1.5rem',
//             border: '1px solid #a2a2a2',
//             borderRadius: '3px',
//             backgroundColor: 'white',
//             fontFamily: 'sans-serif',
//             fontSize: '16px',
//             color: '#2e3e48',
//             textAlign: 'center',
//             marginRight: '20px'
//         }}
//     />
// )

// const endDateInput = ( { ref }, selectedDay2 ) => (
//     <input
//         readOnly
//         ref={ref}
//         value={displayDate(selectedDay2)}
//         style={{
//             minWidth: '250px',
//             padding: '16px',
//             fontSize: '1.5rem',
//             border: '1px solid #a2a2a2',
//             borderRadius: '3px',
//             backgroundColor: 'white',
//             fontFamily: 'sans-serif',
//             fontSize: '16px',
//             color: '#2e3e48',
//             textAlign: 'center',
//             marginRight: '20px'
//         }}
//     />
// )

// export { displayDate, startDateInput, endDateInput }