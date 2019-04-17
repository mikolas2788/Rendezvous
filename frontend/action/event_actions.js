import * as EventAPIUtil from '../util/event_api_util';
import * as MembershipApiUtil from '../util/membership_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveEvents = (events) => {
    return ({
        type: RECEIVE_EVENTS,
        events
    });
};

const receiveEvent = ({ event, users }) => {
    return ({
        type: RECEIVE_EVENT,
        event,
        users
    });
};

const removeEvent = (event) => {
    return ({
        type: REMOVE_EVENT,
        eventId: event.id
    });
};


export const fetchEvents = () => dispatch => {
    return (
        EventAPIUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
    );
};

export const fetchEvent = (id) => dispatch => {
    return (
        EventAPIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
    );
};

export const createEvent = (event) => dispatch => {
    return (
        EventAPIUtil.createEvent(event).then(event => dispatch(receiveEvent(event)))
    );
};

export const updateEvent = (event) => dispatch => {
    return (
        EventAPIUtil.updateEvent(event).then(event => dispatch(receiveEvent(event)))
    );
};

export const deleteEvent = (id) => dispatch => {
    return (
        EventAPIUtil.deleteEvent(id).then(event => dispatch(removeEvent(event)))
    );
};

//rsvps

// export const addMembership = (id) => dispatch => {
//     return (
//         MembershipApiUtil.addMembership(id).then(group => dispatch(receiveGroup(group)))
//     );
// };

// export const deleteMembership = (id) => dispatch => {
//     return (
//         MembershipApiUtil.deleteMembership(id).then(group => dispatch(receiveGroup(group)))
//     );
// };


