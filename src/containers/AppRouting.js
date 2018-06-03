import React, { Component } from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import App from 'App';
import NavbarMenu from 'NavbarMenu';
import CreateNoteContainer from 'CreateNoteContainer';
import EditNoteContainer from 'EditNoteContainer';
import NoteDetailContainer from 'NoteDetailContainer'

class AppRouting extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }

    this.onSaveNote = this.onSaveNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
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

  onEditNote(note) {
    let notesCopy = [...this.state.notes];
    notesCopy[note.id - 1] = {...notesCopy[note.id - 1], ...note};
    this.setState({
      notes: notesCopy
    })
  }

  onDeleteNote(noteId) {
    let notesCopy = [...this.state.notes];
    notesCopy.splice((noteId - 1), 1);
    this.setState({
      notes: notesCopy
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarMenu />
          <Switch>
            <Route path="/notes/:id/edit" render={(props) => <EditNoteContainer notes={this.state.notes} onEditNote={this.onEditNote} {...props}/>} />
            <Route path="/notes/:id" render={(props) => <NoteDetailContainer notes={this.state.notes} onDeleteNote={this.onDeleteNote} {...props} />} />
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