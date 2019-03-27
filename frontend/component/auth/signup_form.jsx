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
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Your name
                        <input type="text" onChange={this.handleUpdate("name")} value={this.state.name}/>
                    </label>
                    <br/>
                    <label> 
                        Email address
                        <input type="text" onChange={this.handleUpdate("email")} value={this.state.email}/>
                    </label>
                    <br/>
                    <label> 
                        Password
                        <input type="password" onChange={this.handleUpdate("password")} value={this.state.password}/>
                    </label>
                    <br/>
                    <input type="submit" value="Continue"/>

                </form>
            </div>
        )
    }
}

export default SignupForm; 