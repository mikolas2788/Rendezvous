import { connect } from 'react-redux'; 
import { signup, login, clearErrors } from '../../action/session_actions'; 
import SignupForm from './signup_form'; 

const msp = ({ errors })=> {
    return {
        formType: 'Continue', 
        errors: errors.session
    };
}; 

const mdp = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)), 
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(SignupForm); 