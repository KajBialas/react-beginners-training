import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.component';
import TextSection from '../../components/textSection/textSection.component';
import Footer from '../../components/footer/footer.component';
import Navigation from '../../components/navigation/navigation.component';
import PostsListsContainer from "../../components/postLists/postsLists.container";

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
        <Navigation/>
        <TextSection text={TEXTS.TEXT1} />
        <TextSection text={TEXTS.TEXT2} />

        <PostsListsContainer />
        <Footer text={TEXTS.FOOTER} />
      </div>
    )
  }
}

export default App;
