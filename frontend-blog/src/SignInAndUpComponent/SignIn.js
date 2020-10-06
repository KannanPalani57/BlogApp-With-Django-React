import React, { Component } from 'react';
import "./SignIn.css"
import axios from "axios";
import {Redirect} from "react-router-dom"


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            person: {
                username: "",
                password: "",
                data: null,
                incorrectLogin: null,
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
    handleSubmit(e){
        e.preventDefault();
        // console.log(this.state.person.username)
        // console.log(this.state.person.password)
          
        const user = {username: this.state.person.username,
            password: this.state.person.password
          }
          axios.post("http://127.0.0.1:8000/auth/", user)
          .then((res) => {
            //  console.log(res.data.token)
           // console.log(res.status)
             // this.props.getData(res)
             this.setState({
                 data: res,
             })
          }).catch(err => this.setState({incorrectLogin: err}))
    }   
    render() {
        return (
            <div className = "main">
                <section className="form">
                <h3>Log In</h3>
                    <p>Login to write your own Article</p>
                    <form onSubmit = {this.handleSubmit}>
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
                    {this.state.incorrectLogin?"The username or password incorrect":""}
                </section>
                
              {this.state.data?<Redirect to= "write/" />:""}

             
            </div>
        );
    }
}

export default SignIn;        