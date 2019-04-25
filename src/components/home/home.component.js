import React, { Component } from 'react';
import Header from '../header/header.component';
import TextSection from '../textSection/textSection.component';
import Footer from '../footer/footer.component';
import Counter from '../counter/counter.component';

const TEXTS = {
  HEADER: 'Innowacyjna nazwa bloga',
  TEXT1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla neque ac laoreet. Fusce vel nulla ornare, aliquam ex eget, sollicitudin neque. Morbi venenatis rutrum ligula vel scelerisque.',
  TEXT2: 'Lorem ipsum dolor sit amet',
  FOOTER: '© Copyright 2018',
};

class App extends Component {
  render() {
    return (
      <div>
        <Header title={TEXTS.HEADER} />
        <TextSection text={TEXTS.TEXT1} />
        <TextSection text={TEXTS.TEXT2} />
        <Counter />
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default App;
