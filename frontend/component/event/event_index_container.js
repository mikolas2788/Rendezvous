import { connect } from 'react-redux'
import EventIndex from './event_index'
import { fetchEvents } from '../../action/event_actions'

const msp = (state, ownProps) => {
    let searchValue = ownProps.searchValue
    return ({
        groups: Object.values(state.entities.groups),
        events: Object.values(state.entities.events),
        searchValue,
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
}

export default connect (msp, mdp) (EventIndex);