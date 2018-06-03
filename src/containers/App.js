import React, { Component } from 'react';
import NoteListContainer from 'NoteListContainer';
import { Link } from 'react-router-dom';
import './App.css';

function showInstruction() {
  return (
    <div className="jumbotron">
      <h1>Welcome to Lambda Notes</h1>
      <p>An app that lets you jot down important information and snippets as you go, so you don't lose 'em.</p>
      <p>To start <Link to="/create">Create New Note</Link></p>
    </div>
  )
}

class App extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="container">
        {notes.length ?
          <div>
            <h2>Your Notes</h2>
            <NoteListContainer {...this.props} />
          </div> :
          showInstruction()
        }
      </div>
    );
  }
}

export default App;
