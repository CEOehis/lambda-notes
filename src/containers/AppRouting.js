import React from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';
import CreateNoteContainer from 'CreateNoteContainer';
import NoteDetailContainer from 'NoteDetailContainer'

const AppRouting = () => (
  <BrowserRouter>
    <div>
      <NavbarMenu />
      <Switch>
        <Route path="/notes/:id" component={NoteDetailContainer} />
        <Route path="/notes" component={App} />
        <Route path="/create" component={CreateNoteContainer} />
        <Redirect from="/" to="/notes" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouting;