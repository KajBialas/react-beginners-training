import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import HomeComponent from './routes/home/home.component';
import AuthorComponent from './routes/author/author.component';
import ContactComponent from './routes/contact/contact.component';
import PostComponent from './routes/post/post.component';
import ErrorPage from "./routes/404/404.component";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeComponent} />
      <Route path='/author' component={AuthorComponent} />
      <Route path='/contact' component={ContactComponent} />
      <Route path='/post/:id' component={PostComponent} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
