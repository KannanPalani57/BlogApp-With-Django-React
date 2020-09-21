import React from 'react';
import './App.css';
import NavBar from "./NavBar"
import SignIn from "./SignInAndUpComponent/SignIn"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
      fetch('http://127.0.0.1:8000/api/')
           .then(response => response.json())
           .then(data => console.log(data))
  }
  render(){
  return (
    <div className="App">
        <NavBar />
        <SignIn />
    </div>
  );
}}

export default App;
