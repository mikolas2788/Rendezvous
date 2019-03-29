import React from 'react';

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
                <div className='signup-form-box'>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <h1>Sign up</h1>
                        <div class='signup-inputs'>
                            <label> 
                                Your name
                                <input 
                                    className='input'
                                    type="text" 
                                    onChange={this.handleUpdate("name")} 
                                    value={this.state.name}/>
                            </label>
                            <label> 
                                Email address
                                <input 
                                    className='input'
                                    type="text" 
                                    onChange={this.handleUpdate("email")} 
                                    value={this.state.email}/>
                            </label>
                            <label> 
                                Password
                                <input 
                                    className='input'
                                    type="password" 
                                    onChange={this.handleUpdate("password")} 
                                    value={this.state.password}/>
                            </label>
                                <input 
                                    className='signup-button'
                                    type="submit" 
                                    value="Continue"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm; 