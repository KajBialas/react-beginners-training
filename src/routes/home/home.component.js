import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.component';
import TextSection from '../../components/textSection/textSection.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';

const TEXTS = {
  HEADER: 'Innowacyjna nazwa bloga',
  TEXT1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.',
  TEXT2: 'Lorem ipsum dolor sit amet',
  FOOTER: '© Copyright 2018',
};

class App extends Component {
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

  renderPostList = (postsList) => postsList.map(postItem => (
    <div key={postItem.id}>
      <Link to={`/post/${postItem.id}`}>{postItem.title}</Link>
      <span> - identyfikator autora: {postItem.userId}</span>
    </div>
  ));

  render() {
    const { allPostsList } = this.state;

    return (
      <div>
        <Header title={TEXTS.HEADER} />
        <Navigation/>
        <TextSection text={TEXTS.TEXT1} />
        <TextSection text={TEXTS.TEXT2} />

        <div>
          <h2>Lista postów:</h2>
          {this.renderPostList(allPostsList)}
        </div>
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default App;
