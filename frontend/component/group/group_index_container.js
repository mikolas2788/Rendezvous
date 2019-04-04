import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, deleteGroup } from '../../action/group_actions';

const msp = state => {
    return ({
        groups: Object.values(state.entities.groups)
    });
};

const mdp = dispatch => {
    return ({
        fetchGroups: () => dispatch(fetchGroups()),
        deleteGroup: (id) => dispatch(deleteGroup(id))
    });
};

export default connect (msp, mdp) (GroupIndex);
