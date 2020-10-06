import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
      }
      componentDidMount(){
          fetch('http://127.0.0.1:8000/api/')
               .then(response => response.json())
               .then(data => this.setState({data: data}))
      }
    render() {
        const max_length = 80        
        return (
            <div style = {{padding: "1em 1em"}}>
                 <h4 style ={{textAlign:"center"}}>The Article written by users are :</h4>
                <section className="articleList" style ={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                    {this.state.data.map(item => {
                        return <div style ={{boxShadow: "1px 1px 4px 1px grey", padding: "1em 3em", marginBottom: "1em"}} key = {item.id}>
                            <h3>{item.title}</h3>
                            
                    <div style = {{width: "60vh"}}>{item.content.length > max_length ? (<div style = {{paddingRight: "1.8em 5em"}}>{`${item.content.substring(0,max_length)}...`}
                    <Link to = {{ pathname:"/article", sendId: {
                        id: item.id   }
                        }}>Read more</Link></div>): item.content}
                        </div>   </div>
                   
                    })}
                </section>
            </div>
        );
    }
}

export default Home;