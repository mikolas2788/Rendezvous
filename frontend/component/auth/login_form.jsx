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
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email address:
                        <input type="text" onChange={this.handleUpdate("email")} value={this.state.email} />
                    </label>
                    <br />
                    <label>
                        Password: 
                        <input type="password" onChange={this.handleUpdate("password")} value={this.state.password} />
                    </label>
                    <br />
                    <input type="submit" value="Log in" />
                    <br/>
                    <button onClick={this.handleDemo}>Demo Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm; 