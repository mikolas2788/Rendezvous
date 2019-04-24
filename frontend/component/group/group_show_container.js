import { connect } from 'react-redux'; 
import GroupShow from './group_show'; 
import { 
    fetchGroup, updateGroup, updateGroupPhoto, deleteGroup, addMembership, deleteMembership 
} from '../../action/group_actions'; 

const msp = (state, ownProps) => {
    const group = state.entities.groups[ownProps.match.params.groupId]
    let organizer; 
    if (group) {
        organizer = state.entities.users[group.organizer_id]
    }
    return {
        group, 
        currentUser: state.entities.users[state.session.id], 
        organizer 
    };
};

const mdp = (dispatch) => {
    return {
        fetchGroup: (id) => dispatch(fetchGroup(id)), 
        updateGroup: (group) => dispatch(updateGroup(group)), 
        updateGroupPhoto: (formData, groupId) => dispatch(updateGroupPhoto(formData, groupId)), 
        deleteGroup: (id) => dispatch(deleteGroup(id)),
        joinGroup: (id) => dispatch(addMembership(id)),
        leaveGroup: (id) => dispatch(deleteMembership(id))
    };
};

export default connect (msp, mdp) (GroupShow); 
