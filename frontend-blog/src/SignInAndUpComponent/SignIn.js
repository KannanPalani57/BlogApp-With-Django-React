import React, { Component } from 'react';
import "./SignIn.css"

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            person: {
                username: "",
                password: "",
            }
            }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleInput(e){
        var  p = this.state.person;
        p[e.target.name] = e.target.value
        this.setState( {
            person: p
       })
    }
    handleSubmit(){
        fetch("http://127.0.0.1:8000/auth/", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(this.state.person)
        })
          .then(data => console.log(data) )
          .catch(error => console.error(error))
    }
    render() {
        return (
            <div className = "main">

                <section className="form">
                <h3>Log In</h3>
                    <p>Login to write your own Article</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="field">   
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" 
                         placeholder = "Enter the Username"
                        name = "username" onChange = {this.handleInput} value = {this.state.person.username}/>
                        </div>
                        <div className="field">   
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            placeholder = "Enter the Password"
                        type="password" name = "password" onChange = {this.handleInput} value = {this.state.person.password}/>
                        </div>
                        <div className="field">
                          <button type = "submit">Login</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default SignIn;