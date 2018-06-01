import React, { Component } from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';
import CreateNoteContainer from 'CreateNoteContainer';
import NoteDetailContainer from 'NoteDetailContainer'

import { notes } from '../mocks/notes';

class AppRouting extends Component {
  constructor() {
    super();

    this.state = {
      notes: notes
    }

    this.onSaveNote = this.onSaveNote.bind(this);
  }

  onSaveNote(title, content) {
    const { notes } = this.state;
    const note = {
      title,
      body: content,
      id: notes.length + 1
    }
    this.setState({
      notes: [...notes, note]
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarMenu />
          <Switch>
            <Route path="/notes/:id" render={(props) => <NoteDetailContainer notes={this.state.notes} {...props} />} />
            <Route path="/notes" render={(props) => <App notes={this.state.notes} {...props} />} />
            <Route path="/create" render={(props) => <CreateNoteContainer notes={this.state.notes} onSaveNote={this.onSaveNote} {...props} />} />
            <Redirect from="/" to="/notes" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouting;