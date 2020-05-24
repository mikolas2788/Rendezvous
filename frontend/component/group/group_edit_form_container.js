import GroupEditForm from './group_edit_form'; 
import { connect } from 'react-redux'; 
import { fetchGroup, updateGroup } from '../../action/group_actions'; 

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
        updateGroup: (group) => dispatch(updateGroup(group)), 
        fetchGroup: (id) => dispatch(fetchGroup(id))
    };
};


export default connect (msp, mdp) (GroupEditForm); 