import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import TextSection from '../../components/textSection/textSection.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';
import Comments from '../../components/comments/comments.component';

const TEXTS = {
  HEADER: 'Innowacyjna nazwa bloga || Podstrona POST ID: ',
  FOOTER: '© Copyright 2018',
};

class Post extends Component {
  state = {
    postDetails: {},
    loading: false,
  };

  componentDidMount() {
    const URL = `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`;
    this.setState({loading: true});
    fetch(URL)
      .then(response => response.json())
      .then(data => setTimeout(() => this.setState({
        postDetails: data,
        loading: false,
      }),4000));
  };

  render() {
    const { title, body } = this.state.postDetails;
    return (
      <div>
        <Header title={`${TEXTS.HEADER} ${this.props.match.params.id}`} />
        <Navigation/>
        {this.state.loading ? <div>Ładowanie</div> : null}
        <h2>{title}</h2>
        <TextSection text={body} />
        <Comments postId={this.props.match.params.id}/>
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default Post;