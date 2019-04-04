import { connect } from 'react-redux'; 
import GroupShow from './group_show'; 
import { 
    fetchGroup, deleteGroup, addMembership, deleteMembership 
} from '../../action/group_actions'; 

const msp = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.match.params.groupId], 
        currentUser: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch) => {
    return {
        fetchGroup: (id) => dispatch(fetchGroup(id)), 
        deleteGroup: (id) => dispatch(deleteGroup(id)),
        joinGroup: (id) => dispatch(addMembership(id)),
        leaveGroup: (id) => dispatch(deleteMembership(id))
    };
};

export default connect (msp, mdp) (GroupShow); 
