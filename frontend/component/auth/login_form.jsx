import React from 'react';
import { Link } from 'react-router-dom';

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

    handleUpdate(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state);
    }

    handleDemo (event) {
        event.preventDefault(); 
        this.props.login({email: "DemoUser@gmail.com", password: "asdfasdf"}); 
    }

    render() {
        return (
            <div className="login-strip">
            <div className='boundary'></div>
                <div className='login-form-box'>
                    <form className='login-form' onSubmit={this.handleSubmit}>
                        <h1 className='h1'>Log In</h1>
                        <p>
                            Not registered with us yet? <Link to="/signup">Sign Up</Link>
                        </p>
                        <div className='login-inputs'>
                            <label>
                                Email address:
                                <input 
                                    className='input'
                                    type="text" 
                                    onChange={this.handleUpdate("email")} 
                                    value={this.state.email} />
                            </label>
                            <label>
                                Password: 
                                <input 
                                    className='input'
                                    type="password" 
                                    onChange={this.handleUpdate("password")} 
                                    value={this.state.password} />
                            </label>
                                <input 
                                    className='login-button'
                                    type="submit" 
                                    value="Log in" />
                                <button 
                                    className='demo-login'
                                    onClick={this.handleDemo}>Demo Log In
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm; 