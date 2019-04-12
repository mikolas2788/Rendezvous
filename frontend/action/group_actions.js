import * as GroupAPIUtil from '../util/group_api_util';
import * as MembershipApiUtil from '../util/membership_api_util'; 

export const RECEIVE_GROUPS = "RECEIVE_GROUPS"; 
export const RECEIVE_GROUP = "RECEIVE_GROUP"; 
export const REMOVE_GROUP = "REMOVE_GROUP"; 

const receiveGroups = (groups) => {
    return ({
        type: RECEIVE_GROUPS, 
        groups
    });
}; 

const receiveGroup = ({group, users}) => {
    return ({
        type: RECEIVE_GROUP, 
        group, 
        users
    });
}; 

const removeGroup = (group) => {
    return ({
        type: REMOVE_GROUP, 
        groupId: group.id
    });
}; 


export const fetchGroups = () => dispatch => {
    return (
        GroupAPIUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
    );
};

export const fetchGroup = (id) => dispatch => {
    return (
        GroupAPIUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
    );
};

export const createGroup = (group) => dispatch => {
    return (
        GroupAPIUtil.createGroup(group).then(group => dispatch(receiveGroup(group)))
    );
};

export const updateGroup = (group) => dispatch => {
    return (
        GroupAPIUtil.updateGroup(group).then(group => dispatch(receiveGroup(group)))
    );
};

export const deleteGroup = (id) => dispatch => {
    return (
        GroupAPIUtil.deleteGroup(id).then((group) => dispatch(removeGroup(group)))
    );
};

//membership

export const addMembership = (id) => dispatch => {
    return (
        MembershipApiUtil.addMembership(id).then(group => dispatch(receiveGroup(group)))
    );
};

export const deleteMembership = (id) => dispatch => {
    return (
        MembershipApiUtil.deleteMembership(id).then(group => dispatch(receiveGroup(group)))
    );
};


