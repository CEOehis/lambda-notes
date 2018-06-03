import React, { Component } from 'react';
import NoteListContainer from 'NoteListContainer';
import './App.css';

function showInstruction() {
  return (
    <div className="jumbotron">
      <h1>Welcome to Lambda Notes</h1>
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
