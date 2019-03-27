import { connect } from 'react-redux'; 
import { signup, login } from '../../action/session_actions'; 
import SignupForm from './signup_form'; 

const msp = state => {
    return {
        formType: 'sign up', 
        errors: Object.values(state.errors)
    };
}; 

const mdp = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user)), 
        login: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SignupForm); 