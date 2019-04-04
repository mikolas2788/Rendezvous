import merge from 'lodash/merge';
import {
    RECEIVE_GROUPS, 
    RECEIVE_GROUP,
    REMOVE_GROUP
} from '../action/group_actions'; 


const groupsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState; 
    switch (action.type) {
        case RECEIVE_GROUPS:
            return action.groups; 
        case RECEIVE_GROUP:
            newState = merge({}, state, {[action.group.id]: action.group}); 
            newState[action.group.id].members = action.group.members; 
            return newState; 
        // case REMOVE_GROUP:
        default: 
            return state; 
    }
}; 

export default groupsReducer; 