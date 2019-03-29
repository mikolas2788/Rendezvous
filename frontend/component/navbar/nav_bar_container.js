import { connect } from 'react-redux';
import NavBar from './nav_bar';
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

export default connect (msp, mdp)(NavBar); 
