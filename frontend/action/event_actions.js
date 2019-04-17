import * as EventAPIUtil from '../util/event_api_util';
import * as RSVPApiUtil from '../util/rsvp_api_util';

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

export const addRSVP = (id) => dispatch => {
    return (
        RSVPApiUtil.addRSVP(id).then(event => dispatch(receiveEvent(event)))
    );
};

export const deleteRSVP = (id) => dispatch => {
    return (
        RSVPApiUtil.deleteRSVP(id).then(event => dispatch(receiveEvent(event)))
    );
};


