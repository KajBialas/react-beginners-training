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
  render() {
    return (
      <div>
        <Header title={`${TEXTS.HEADER} ${this.props.match.params.id}`} />
        <Navigation/>
        <TextSection text={TEXTS.TEXT1} />
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default Post;