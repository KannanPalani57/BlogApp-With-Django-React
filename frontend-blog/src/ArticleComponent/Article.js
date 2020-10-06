import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from "axios"

class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.location.sendId,
            post: [],    
        }

    }
   
    componentDidMount(){
        console.log(this.state.data.id)
        let url = `http://127.0.0.1:8000/api/${this.state.data.id}`;
            console.log(url)
         axios.get(url)
         .then(res => this.setState({post: res.data}))
    }
    render() {
        return (
            <div>
                <div style = {{fontWeight:"bold", textAlign:"center"}}>
                    {this.state.post.title}
                </div>
                <div style = {{padding: "0 25vh"}} className="content">
                    <p>{this.state.post.content}</p>
                </div>
            </div>
        );
    }   
}

export default withRouter(Article);