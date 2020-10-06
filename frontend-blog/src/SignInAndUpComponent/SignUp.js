import React, { Component } from 'react';
import "./SignIn.css";
import axios from "axios"

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            person: {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
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
        var data = {
            username: this.state.person.username,
            password: this.state.person.password,
            email: this.state.person.email,
            first_name: this.state.person.firstname,
            last_name: this.state.person.lastname,
        }
      axios.post("http://127.0.0.1:8000/api/users/", 
          data
      ).then(res => {console.log(res)}
      , (error) => {
        console.log(error);
          }); 
    }
    render() {
        return (
            <div className = "main">

                <section className="form">
                <h3>Register</h3>
                    <p>Register to become an Author</p>
                    <form>

                    <div className="field">   
                        <label htmlFor="firstname">
                            Firstname
                        </label>
                        <input type="text" 
                         placeholder = "Enter the firstname"
                        name = "firstname" onChange = {this.handleInput} value = {this.state.person.firstname}/>
                    </div>

                    <div className="field">   
                        <label htmlFor="lastname">
                            Lastname
                        </label>
                        <input type="text" 
                         placeholder = "Enter the lastname"
                        name = "lastname" onChange = {this.handleInput} value = {this.state.person.lastname}/>
                    </div>

                    <div className="field">   
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" 
                         placeholder = "Enter the Email"
                        name = "email" onChange = {this.handleInput} value = {this.state.person.email}/>
                    </div>



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
                          <button onClick = {this.handleSubmit}>Register</button>
                    </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default SignUp;