import { connect } from 'react-redux'; 
import { login, signup } from '../../action/session_actions';
import LoginForm from './login_form'; 

const msp = (state) => {
    return { 
        formType: "Log In", 
        errors: Object.values(state.errors)
    };
}; 

const mdp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(LoginForm); 