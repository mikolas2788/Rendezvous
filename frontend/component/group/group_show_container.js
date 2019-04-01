import { connect } from 'react-redux'; 
import GroupShow from './group_show'; 
import { fetchGroup } from '../../action/group_actions'

const msp = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.match.params.groupId]
    }
}

const mdp = (dispatch) => {
    return {
        fetchGroup: (id) => dispatch(fetchGroup(id))
    }
}

export default connect (msp, mdp) (GroupShow); 
