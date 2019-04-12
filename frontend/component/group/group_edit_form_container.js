import { connect } from 'react-redux'; 
import GroupEditForm from './group_edit_form'; 
import { fetchGroup, updateGroup } from '../../action/group_actions'; 

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        group: state.entities.groups[ownProps.match.params.groupId]
    };
};

const mdp = (dispatch) => {
    return {
        updateGroup: (group) => dispatch(updateGroup(group)), 
        fetchGroup: (id) => dispatch(fetchGroup(id))
    };
};


export default connect (msp, mdp) (GroupEditForm); 