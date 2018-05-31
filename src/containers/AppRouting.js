import React from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';
import CreateNoteContainer from './CreateNoteContainer';

const AppRouting = () => (
  <BrowserRouter>
    <div>
      <NavbarMenu />
      <Switch>
        <Route exact path="/notes" component={App} />
        <Route path="/create" component={CreateNoteContainer} />
        <Redirect from="/" to="/notes" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouting;