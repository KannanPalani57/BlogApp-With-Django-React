import React from 'react';
import './App.css';
import NavBar from "./NavBar"
import Home from "./Home"
import SignIn from "./SignInAndUpComponent/SignIn"
import SignUp from "./SignInAndUpComponent/SignUp"
import Article from "./ArticleComponent/Article"
import WriteArticle from "./ArticleComponent/WriteArticle"
import {Route, Switch} from "react-router-dom"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       data: "",
    }
    this.getData = this.getData.bind(this);
  }

  getData(fromData){
      console.log(fromData)
      this.setState({
        data: fromData,
      })
  
    }

  render(){
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path = "/" exact component = {() => <Home />}></Route>
          <Route path = "/login" exact component = {() => <SignIn getData = {this.getData}/>}></Route>
          <Route path = "/register" exact component = {() => <SignUp />}></Route>
          <Route path = "/article" exact component = {() => <Article />}></Route>
          <Route path = "/write" exact component = {() => <WriteArticle />}></Route>
        </Switch>
    </div>
  );
}}

export default App;
