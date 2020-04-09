import React from 'react'; 
// import GroupIndex from '../group/group_index_container'
import { connect } from 'react-redux';
import GroupIndex from '../group/group_index_container';
import { fetchGroups, deleteGroup } from '../../action/group_actions';

class MainBody extends React.Component {

    render () {
        return (
            <div className='main-page-body'>
                <GroupIndex />
            </div>
        )
    }
}

// export default MainBody; 


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

export default connect(msp, mdp)(MainBody);