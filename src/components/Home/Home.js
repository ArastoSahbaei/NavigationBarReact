import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {

    state = {
        data: [ ]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            this.setState({
                data: response.data.slice(0, 10)
            })
        })
    }

    render() {
        const { data } = this.state;
        const cryptoList = data.length ? (
            data.map(post => {
                            return(
                            <div className="post card" key={data.id}>
                            <h1>LOL</h1>
                            <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                            </div>
                          </div>
                    )
                    })) 
                         : (<div className="center">NO POSTS YET?</div>)
   
            return(
                <div className="container">
                    <h4 className="center">Home</h4>
                    {cryptoList}
                 </div>
                  )
             }
}

export default Home;