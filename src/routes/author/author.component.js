import React, { Component } from 'react';
import Header from '../../components/header/header.component';
import TextSection from '../../components/textSection/textSection.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';

const TEXTS = {
  HEADER: 'Innowacyjna nazwa bloga || Podstrona O autorze',
  TEXT1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.',
  FOOTER: '© Copyright 2018',
};

class Author extends Component {
  render() {
    return (
      <div>
        <Header title={TEXTS.HEADER} />
        <Navigation/>
        <TextSection text={TEXTS.TEXT1} />
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default Author;