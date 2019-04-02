import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { fetchGroups, deleteGroup } from '../../actions/group_actions';

const msp = state => {
    return ({
        groups: Object.values(state.groups)
    });
};

const mdp = dispatch => {
    return ({
        fetchGroups: () => dispatch(fetchGroups()),
        deleteGroup: (id) => dispatch(deleteGroup(id))
    });
};

export default connect (msp, mdp) (GroupIndex);
