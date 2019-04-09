import { connect } from 'react-redux'; 
import { login, signup, clearErrors } from '../../action/session_actions';
import LoginForm from './login_form'; 

const msp = ({ errors }) => {
    return { 
        formType: "Log in", 
        errors: errors.session
    };
}; 

const mdp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(LoginForm); 