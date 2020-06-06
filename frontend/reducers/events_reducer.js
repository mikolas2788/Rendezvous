import merge from 'lodash/merge';
import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT
} from '../action/event_actions';


const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            newState = Object.assign({}, state, { [action.event.id]: action.event });
            return newState;
        case REMOVE_EVENT:
            newState = Object.assign({}, state)
            delete newState[action.eventId]
            return newState;
        default:
            return state;
    }
};

export default eventsReducer; 