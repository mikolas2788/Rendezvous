import { createGroup } from '../../action/group_actions';
import { connect } from 'react-redux';
import GroupCreateForm from './group_create_form';

const msp = (state) => {
    return {
        creatorId: state.session.id
    };
};

const mdp = (dispatch) => {
    return {
        createGroup: (group) => dispatch(createGroup(group))
    };
};

export default connect (msp, mdp) (GroupCreateForm); 