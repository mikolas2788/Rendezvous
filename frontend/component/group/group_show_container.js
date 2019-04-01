import { connect } from 'react-redux'; 
import GroupShow from './group_show'; 
import { fetchGroup, deleteGroup } from '../../action/group_actions'

const msp = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.match.params.groupId]
    }
}

const mdp = (dispatch) => {
    return {
        fetchGroup: (id) => dispatch(fetchGroup(id)), 
        deleteGroup: (id) => dispatch(deleteGroup(id))
    }
}

export default connect (msp, mdp) (GroupShow); 
