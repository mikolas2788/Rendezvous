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
            newState = Object.assign({}, state, {[action.group.id]: action.group}); 
            return newState; 
        case REMOVE_GROUP:
            newState = Object.assign({}, state)
            delete newState[action.groupId]
            return newState; 
        default: 
            return state; 
    }
}; 

export default groupsReducer; 