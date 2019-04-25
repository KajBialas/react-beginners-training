import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [{
  id: 0,
  name: 'Home',
  url: '/',
}, {
  id: 1,
  name: 'Author',
  url: '/author',
}, {
  id: 2,
  name: 'Contact',
  url: '/contact',
}];

const Navigation = (props) => (
  <div>
    {LINKS.map(navigationItem => <Link to={navigationItem.url} key={navigationItem.id}>{navigationItem.name}</Link>)}
  </div>
);

export default Navigation;