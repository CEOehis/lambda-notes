import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';
import CreateNoteContainer from './CreateNoteContainer';

const AppRouting = () => (
  <BrowserRouter>
    <div>
      <NavbarMenu />
      <Route exact path="/" component={App} />
      <Route path="/create" component={CreateNoteContainer} />
    </div>
  </BrowserRouter>
);

export default AppRouting;