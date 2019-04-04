import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push('/home')); 
    }

    handleUpdate(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    handleDemo (event) {
        event.preventDefault(); 
        this.props.login({email: "DemoUser@gmail.com", password: "asdfasdf"}); 
    }

    renderErrors () {
        if (this.props.errors) {
            return (
                <div className='error-strip'>
                    <div className='error-box'>
                        <h2 className='error-message'>
                            Your email or password was entered incorrectly. 
                        </h2>
                        <p className='error-supplemental'>
                            Please try again. 
                        </p>
                    </div>
                </div>
            )
        }
    }

    render() {

        return (
            <div className="login-strip">
            <div className='boundary'></div>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <div className='login-top'> 
                        <div className='login-header'>
                            <h1>Log In</h1>
                            <img src="https://bit.ly/2JOaXoD"/>
                        </div>
                        <br/>
                        <div className='signup-instead'>
                            <p>
                                Not registered with us yet? <Link className='signup-instead-link' to="/signup">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                    <br /> 
                    <div className='login-inputs'>
                        <label>
                            Email address:
                            <input 
                                className='input'
                                type="text" 
                                onChange={this.handleUpdate("email")} 
                                value={this.state.email} />
                        </label>
                        <br/><br/>    
                        <label>
                            Password: 
                            <input 
                                className='input'
                                type="password" 
                                onChange={this.handleUpdate("password")} 
                                value={this.state.password} />
                        </label>
                        <br /><br />   
                            <input 
                                className='login-button'
                                type="submit" 
                                value="Log in" />
                    </div>
                        <div className='login-bottom'>
                            <div className='or-option'>
                                <p>OR</p>
                            </div>
                                <button 
                                    className='demo-button'
                                    onClick={this.handleDemo}>
                                    Demo Log In
                                </button>
                        </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm); 