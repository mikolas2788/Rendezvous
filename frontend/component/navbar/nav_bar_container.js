import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import { logout } from '../../action/session_actions'; 

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};  

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
}; 

export default withRouter (connect (msp, mdp) (NavBar)); 
