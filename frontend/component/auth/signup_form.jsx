import React from 'react';
import { Link } from 'react-router-dom'; 

class Signup extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
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
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> 
                        Your name
                        <input type="text" onChange={this.handleUpdate("name")} value={this.state.name}/>
                    </label>

                    <label> 
                        Email address
                        <input type="text" onChange={this.handleUpdate("email")} value={this.state.email}/>
                    </label>

                    <label> 
                        Password
                        <input type="password" onChange={this.handleUpdate("password")} value={this.state.password}/>
                    </label>

                </form>
            </div>
        )
    }
}

