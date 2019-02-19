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
                                <div>
                                    <div key = {data.id}     />
                                    <h3>       {post.title} </h3>
                                    <p>        {post.body}  </p>
                                </div>
                          
                    )
                    })) 
                         : (<div>NO POSTS YET?</div>)
   
            return(
                <div className="container">
                <br />
                <br />
                <br />
                    <h1>This is the part</h1>
                    {cryptoList}
                 </div>
                  )
             }
}

export default Home;