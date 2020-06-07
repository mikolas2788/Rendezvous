// import GroupIndex from './group_index';
import GroupIndex from './group_index2';
import { connect } from 'react-redux';
import { fetchGroups, deleteGroup } from '../../action/group_actions';

const msp = (state, ownProps) => {
    let searchValue = ownProps.searchValue;
    return ({
        groups: Object.values(state.entities.groups),
        searchValue,
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = dispatch => { 
    return ({
        fetchGroups: () => dispatch(fetchGroups()),
        deleteGroup: (id) => dispatch(deleteGroup(id))
    });
};

export default connect (msp, mdp) (GroupIndex);
