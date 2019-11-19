import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PostListsComponent = ({allPostsList}) => {
    const renderPostList = () => allPostsList.map(postItem => (
        <div key={postItem.id}>
            <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
            <span> - identyfikator autora: {postItem.userId}</span>
        </div>
    ));

    return(
        <div>
            <h2>Lista Postów</h2>
            <div>
                {renderPostList()}
            </div>

        </div>
    )
};

PostListsComponent.propTypes = {
    allPostsList: PropTypes.array.isRequired,
};

PostListsComponent.defaultProps = {
    allPostsList: [],
};

export default PostListsComponent;