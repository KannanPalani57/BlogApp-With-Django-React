import React, { Component } from 'react';
import axios from "axios"

class WriteArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: {
                title: "",
                content: "",
            },
            success: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        var  p = this.state.post;
        p[e.target.name] = e.target.value
        this.setState( {
           post: p
       })
    }

    handleSubmit(e){
        e.preventDefault();
        const article = {
            title: this.state.post.title,
            content: this.state.post.content,
        }
        axios.post("http://127.0.0.1:8000/api/post/", article)
        .then(res=> this.setState({success: res})).catch(err => console.log(err))
      const clearInput = {
          title: "",
          content: "",
      }
        this.setState({
            post: clearInput,
        })
    }

     
    render() {
        return (
            <div>
                <section className="form" style = {{
                    marginLeft: "50vh",marginTop: "5vh",
                    marginBottom: "1em"
                }}>
                <h3>Write Article</h3>
                    <p>Write your Article Now</p>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="field">   
                        <label htmlFor="title">
                            title
                        </label>
                        <input required type="text" 
                         placeholder = "Enter the title"
                        name = "title" onChange = {this.handleInput} value = {this.state.post.title}/>
                        </div>
                        <div className="field">   
                        <label htmlFor="content">
                            content
                        </label>
                        <br>
                        </br>
                        <br/>
                        <textarea placeholder = "Type the content" rows = "10" cols = "30" name = "content" onChange = {this.handleInput} value = {this.state.post.content} required/>
                        </div>
                        <div className="field">
                          <button type = "submit">Post The Blog</button>
                        </div>
                        {this.state.success?"The article shared Successfully":""}
                    
                    </form>
                    </section>
            </div>
        );
    }
}

export default WriteArticle;