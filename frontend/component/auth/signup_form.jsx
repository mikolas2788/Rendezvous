import React from 'react';
import { Link } from 'react-router-dom'; 

class SignupForm extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            name: "", 
            email: "",
            password: "", 
        }; 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleUpdate (field) {
        return (event) => {
            this.setState({ [field]: event.target.value }); 
        }; 
    }
    
    handleSubmit (event) {
        event.preventDefault(); 
        this.props.signup(this.state); 
    }

    render () {
        return (
            <div className='signup-strip'>
            <div className='boundary'></div>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <div className='signup-top'>
                        <div className='signup-header'>
                            <h1>Sign Up</h1>
                            <img src="https://bit.ly/2JOaXoD" />
                        </div>
                        <br />
                        <div className='login-instead'>
                            <p>
                                Already a member? <Link className='login-instead-link' to="/login">Log In</Link>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className='signup-inputs'>
                        <label> 
                            Your name
                            <input 
                                className='input'
                                type="text" 
                                onChange={this.handleUpdate("name")} 
                                value={this.state.name}/>
                        </label>
                        <br /><br />   
                        <label> 
                            Email address
                            <input 
                                className='input'
                                type="text" 
                                onChange={this.handleUpdate("email")} 
                                value={this.state.email}/>
                        </label>
                        <br /><br />   
                        <label> 
                            Password
                            <input 
                                className='input'
                                type="password" 
                                onChange={this.handleUpdate("password")} 
                                value={this.state.password}/>
                        </label>
                        <br/><br/>
                            <input 
                                className='signup-button'
                                type="submit" 
                                value="Continue"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm; 