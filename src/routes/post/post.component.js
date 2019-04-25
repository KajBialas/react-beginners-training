import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import TextSection from '../../components/textSection/textSection.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';

const TEXTS = {
  HEADER: 'Innowacyjna nazwa bloga || Podstrona POST ID: ',
  FOOTER: '© Copyright 2018',
};

class Post extends Component {
  state = {
    postDetails: {}
  };

  componentDidMount() {
    const URL = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({
        postDetails: data,
      }));
  };

  render() {
    const { title, body } = this.state.postDetails;
    return (
      <div>
        <Header title={`${TEXTS.HEADER} ${this.props.match.params.id}`} />
        <Navigation/>
        <h2>{title}</h2>
        <TextSection text={body} />
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default Post;