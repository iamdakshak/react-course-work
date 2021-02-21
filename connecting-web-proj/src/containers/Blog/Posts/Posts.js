import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
import Axios from 'axios';

class Posts extends Component{
    state = {
        posts : [],
        selectedPostId : null,
        error: false
    }
    componentDidMount(){
        console.log(this.props);
        Axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dakshak'
                    }
                });
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                //this.setState({error: true});
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id})
        this.props.history.push({pathname: '/posts/' + id});
        //OR this.props.history.push('/posts/' + id);
    }

    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                //     <Post title={post.title} 
                //      author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
                // </Link>

                <Post title={post.title} key={post.id}
                     author={post.author} clicked={() => this.postSelectedHandler(post.id)} />
                );
            });
        }

        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'}  component={FullPost} />
            </div>
        );
    }
}

export default Posts;