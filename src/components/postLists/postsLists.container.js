import React, { Component } from 'react';
import PostListsComponent from "./postsLists.component";

class PostsListsContainer extends Component {
    state = {
        allPostsList: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => this.setState({
                allPostsList: data,
            }));
    };

    render() {
        const { allPostsList } = this.state;

        return (
            <PostListsComponent allPostsList={allPostsList}/>
        )
    }
}

export default PostsListsContainer;
